(function ($) {
    "use strict";

    var tinymce = window.tinymce || null;

    let babel_selected = null;
    let orig_babel_selected = null;

    function sync_heights(el1, el2) {
        if (el1.style.height != "auto") {
            // reset if previously set
            el1.style.height = "auto";
        }
        if (el2.style.height != "auto") {
            // reset if previously set
            el2.style.height = "auto";
        }
        const max_height = Math.max(
            el1.getBoundingClientRect().height,
            el2.getBoundingClientRect().height,
        );
        el1.style.height = `${max_height}px`;
        el2.style.height = `${max_height}px`;
    }

    function sync_header_height() {
        // sync header and tab/button heights to ensure the fields are aligned synchronous
        sync_heights(
            document.querySelector("#babel-edit > div > h2"),
            document.querySelector("#header-translation h2"),
        )

        // sync translation button and tab heights
        sync_heights(
            document.querySelector("#babel-edit #trans-selector"),
            document.querySelector("#form-target .autotoc-nav"),
        )
    }

    function sync_focus(orig_field, focus_field, focus_tinymce) {
        const click_field = (field) => {
            if (babel_selected) {
                babel_selected.classList.remove("selected");
                orig_babel_selected.classList.remove("selected");
            }
            babel_selected = focus_field;
            babel_selected.classList.add("selected");
            orig_babel_selected = orig_field;
            orig_babel_selected.classList.add("selected");
        };

        /* select a field on both sides and change the color */
        focus_field.addEventListener("click", click_field);

        if(focus_tinymce) {
            focus_tinymce.on("focus", click_field);
        }
    }

    function update_view() {
        let order = 1;
        const url_translate = document.querySelector('input#url_translate')?.value;
        const langSource = document.querySelector('#frame-content #view_language').innerHTML;

        sync_header_height();

        const original_fields = document.querySelectorAll('#frame-content .field');
        const destination_fields = document.querySelectorAll('#form-target fieldset .field');
        const visible_destination_fields = [...destination_fields].filter(it => it.closest("fieldset.active") != null);

        // show only fields of current tab
        original_fields.forEach((field) => {
            field.style.display = "none";
            visible_destination_fields.forEach((dst_fld) => {
                if (dst_fld.dataset.fieldname.endsWith(field.id)) {
                    field.style.display = "block";
                    return;
                }
            })
        });

        visible_destination_fields.forEach(dest_field => {
            try {
                var orig_field = [...original_fields].filter(it => dest_field.dataset.fieldname.endsWith(it.id));

                if (!orig_field.length) {
                    // field not found
                    return;
                }
                orig_field = orig_field[0];
                const gtranslate_enabled = document.getElementById("gtranslate_service_available");
                const target_el = dest_field.querySelector('textarea,input');
                let target_tiny = null;
                const tinymceObj = window['tinymce'];
                if (tinymceObj && typeof tinymceObj.get === 'function') {
                    target_tiny = tinymceObj.get(target_el.id);
                }

                sync_focus(orig_field, dest_field, target_tiny);
                sync_heights(orig_field, dest_field);

                // Add the google translation field
                if (
                    gtranslate_enabled.value === "True" && (
                        dest_field.querySelectorAll('.text-widget, .textarea-widget, .richTextWidget').length ||
                        target_tiny !== null
                    ) && !orig_field.querySelector(".translator-widget")
                ) {
                    const translator_widget = document.createElement("div");

                    translator_widget.classList.add("translator-widget");
                    translator_widget.id = `item_translation_${order}`;

                    translator_widget.addEventListener("click", async function () {
                        var field = orig_field.getAttribute("rel");
                        var url_parts = document.location.pathname.split('++addtranslation++');
                        var postdata = new URLSearchParams({
                            'field': field,
                            'lang_source': langSource,
                            'context_uid': url_parts[1]
                        });
                        const translate_service_url = url_translate + '/gtranslation_service';
                        const response = await fetch(translate_service_url, {
                            method: "POST",
                            headers: {"Content-type": "application/x-www-form-urlencoded; charset: utf-8"},
                            body: postdata,
                        });
                        if (!response.ok) {
                            console.log(`Could not load ${translate_service_url}: ${response.statusText}`);
                            return;
                        }
                        const json = await response.json();
                        var text_target = json.data;
                        if (text_target) {
                            if (target_el.classList.contains('richTextWidget')) {
                                waitForTinyMCE(target_el, function(editor) {
                                    editor.setContent(text_target);
                                    editor.fire('change');
                                    editor.save();
                                });
                            } else {
                                target_el.value = text_target;
                                $(target_el).trigger("change");
                            }
                        }
                    });

                    orig_field.prepend(translator_widget);
                    order += 1;
                }
            } catch (error) {
                console.error('Error update_view field:', error);
            }
        });
    }

    function init_tab_switch() {
        // init fieldset switch
        document.querySelector("#form-target form").querySelectorAll(".autotoc-nav a").forEach((item) => {
            // NOTE: the "clicked" event is triggered in pat-autotoc
            $(item).on("clicked", (e) => {
                update_view();
            });
        });
    }

    function load_default_language() {
        // Fetch default language content
        const trans_buttons = document.querySelectorAll("#trans-selector button");
        const active_buttons = [...trans_buttons].filter(it => it.classList.contains("active"));
        const trans_select = document.querySelector("#trans-selector select");

        let initialFetchUrl = "";

        if (active_buttons.length) {
            initialFetchUrl = active_buttons[0].dataset.url;
        } else if (trans_buttons.length) {
            trans_buttons[0].classList.add("active");
            initialFetchUrl = trans_buttons[0].dataset.url;
        } else if (trans_select) {
            initialFetchUrl = trans_select.value;
        } else {
            // no chance to get original language content
            return;
        }

        // Mostrar el spinner
        document.getElementById('loading-spinner').style.display = 'block';
        $('#frame-content').load(initialFetchUrl, function () {
            // Quitar envoltorio de leyendas si existe
            $("#frame-content fieldset legend").unwrap().remove();
            update_view();
            // Ocultar el spinner cuando termine
            document.getElementById('loading-spinner').style.display = 'none';
        });
    }

    function init_babel_view() {
        /* change the language trigger */
        $('#trans-selector button').on("click", function () {
            var url = $(this).data('url');
            // Mostrar el spinner
            document.getElementById('loading-spinner').style.display = 'block';
            $('#frame-content').load(url, function () {
                $("#frame-content fieldset legend").unwrap().remove();
                update_view();
                // Ocultar el spinner cuando termine
                document.getElementById('loading-spinner').style.display = 'none';
            });
            $('#trans-selector button.active').removeClass('active');
            $(this).addClass('active');
        });

        /* change the language trigger, this time for the drop-down, which is
        used when too many translations are present to fit into buttons */
        $('#trans-selector select').on("change", function () {
            var selected_elem = $(this).children('option').eq(this.selectedIndex);
            var url = selected_elem.val();
            // Mostrar el spinner
            document.getElementById('loading-spinner').style.display = 'block';
            $('#frame-content').load(url, function () {
                $("#frame-content fieldset legend").unwrap().remove();
                update_view();
                // Ocultar el spinner cuando termine
                document.getElementById('loading-spinner').style.display = 'none';
            });
        });

        // initialize tab change
        init_tab_switch();

        // load original language and update the view
        load_default_language();
    };

    let initInterval = null;
    initInterval = setInterval(() => {
        if (!document.querySelector("body.patterns-loaded")) {
            // wait for loaded patterns
            return;
        }
        clearInterval(initInterval);
        init_babel_view();
    }, 500);

    // fix field alignment on window resize
    let deferResize = null;
    window.addEventListener("resize", () => {
        if (deferResize) {
            clearTimeout(deferResize);
        }
        deferResize = setTimeout(update_view, 500);
    });

    function waitForTinyMCE(target_el, callback, retries = 10) {
        const tinymceObj = window['tinymce'];
        if (tinymceObj && typeof tinymceObj.get === 'function') {
            const editor = tinymceObj.get(target_el.id);
            if (editor) {
                callback(editor);
                return;
            }
        }
        if (retries > 0) {
            setTimeout(() => waitForTinyMCE(target_el, callback, retries - 1), 300);
        } else {
            console.warn('TinyMCE no se inicializó a tiempo');
        }
    }

}(jQuery));