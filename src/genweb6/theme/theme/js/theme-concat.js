/*  INICIO back_to_top.js */

$(document).ready(function(){

    var btt_offset = 250;
    var btt_duration = 300;

    $(window).scroll(function() {
        if($(this).scrollTop() > btt_offset){
            $('.back-to-top').fadeIn(btt_duration);
        }else{
            $('.back-to-top').fadeOut(btt_duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, btt_duration);
        return false;
    });
});

/*  FIN back_to_top.js */
$(document).ready(function() {

  $('.carousel-control-pause').click(function() {

    var carousel = $(this).closest('.carousel');

    if (carousel.hasClass('paused')) {
      carousel.carousel('cycle');
      carousel.removeClass('paused');
    } else {
      carousel.carousel('pause');
      carousel.addClass('paused');
    }

    var icon = $(this).find('.bi-pause-fill');

    if (icon.length) {
      icon.removeClass('bi-pause-fill').addClass('bi-play-fill');
    } else {
      icon = $(this).find('.bi-play-fill');
      icon.removeClass('bi-play-fill').addClass('bi-pause-fill');
    }

  });

});function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).html()).select();
    document.execCommand("copy");
    $temp.remove();
}

$(document).ready(function(){

    $('#copy-html').tooltip({
      animated: 'fade',
      placement: 'bottom',
      trigger: 'click',
    });

    $('#copy-html').on('click', function(){
        event.preventDefault();
        copyToClipboard('#copy_content');
        return false;
    });

});
$(document).ready(function(){

    $('#copy-universal-link').tooltip({
      animated: 'fade',
      placement: 'bottom',
      trigger: 'click',
    });

    $('#copy-universal-link').on('click', function(){
        event.preventDefault();

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#copy-universal-link').attr('data-url')).select();
        document.execCommand("copy");
        $temp.remove();

        setTimeout(function(){
            $('#copy-universal-link').tooltip('hide');
        }, 2000);

        return false;
    });

});
/*  INICIO footer.js */

$(document).ready(function(){

    $('#portal-footer').addClass($('#footer-complementary').data('class'));
    $('#portal-footer').attr('style', '--bg-img-url: url(' + $('#footer-complementary').data('img') + ')');

    /* Ocultar no-folders si no tiene elementos */
    if($("#portal-footer .no-folders").length > 0){
        if($("#portal-footer .no-folders > ul > li:not(.has_subtree)").length == 0){
            $("#portal-footer .no-folders").hide();
        }
    }
});

/*  FIN footer.js */
/*  INICIO header.js */

function checkNavbar() {
    if($('#portal-globalnav').outerWidth(true) >= $('#portal-navbar').outerWidth(true)){
        $('#header').addClass('mobile');
    }
}

$(document).ready(function(){

    var btt_offset = 1;

    $(window).scroll(function() {
        if($(this).scrollTop() > btt_offset){
            $('#header').addClass('shink');
            $('#hero').addClass('shink');
        }else{
            $('#header').removeClass('shink');
            $('#hero').removeClass('shink');
        }
    });

    $(window).resize(function() {
        checkNavbar();
    });

    checkNavbar();

    $('#portal-navbar-mobile nav.navbar li.has_subtree label').on('click', function(){
        $(this).closest('li.has_subtree').toggleClass('open');
    });

    var btt_duration = 300;

    $('#hero a.down-hero').on('click', function(){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#hero')[0].scrollHeight}, btt_duration);
        return false;
    });
});

/*  FIN header.js */
/*  INICIO menu_accessibility.js */
/*  Mejoras de accesibilidad para navegación por teclado del menú principal */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        
        const menuItems = document.querySelectorAll('#portal-navbar .has_subtree');
        
        menuItems.forEach(function(menuItem) {
            const link = menuItem.querySelector('a.nav-link');
            const checkbox = menuItem.querySelector('input.opener');
            const label = menuItem.querySelector('label');
            const dropdown = menuItem.querySelector('ul');
            
            if (!link || !checkbox || !label || !dropdown) {
                return;
            }
            
            // Add ARIA attributes
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
            dropdown.setAttribute('role', 'menu');
            dropdown.setAttribute('aria-label', link.textContent.trim());
            
            // Make dropdown links have proper role
            const dropdownLinks = dropdown.querySelectorAll('a.nav-link');
            dropdownLinks.forEach(function(dropdownLink) {
                dropdownLink.setAttribute('role', 'menuitem');
            });
            
            // Make label focusable
            label.setAttribute('tabindex', '0');
            label.setAttribute('role', 'button');
            label.setAttribute('aria-label', 'Abrir submenú de ' + link.textContent.trim());
            
            // Function to check if menu is open
            function isOpen() {
                return checkbox.checked;
            }
            
            // Function to open menu
            function openMenu() {
                if (!isOpen()) {
                    checkbox.checked = true;
                    link.setAttribute('aria-expanded', 'true');
                    menuItem.classList.add('keyboard-open');
                    
                    // Focus first item in dropdown
                    setTimeout(function() {
                        const firstItem = dropdown.querySelector('a.nav-link');
                        if (firstItem) {
                            firstItem.focus();
                        }
                    }, 100);
                }
            }
            
            // Function to close menu
            function closeMenu() {
                if (isOpen()) {
                    checkbox.checked = false;
                    link.setAttribute('aria-expanded', 'false');
                    menuItem.classList.remove('keyboard-open');
                }
            }
            
            // Function to toggle menu
            function toggleMenu() {
                if (isOpen()) {
                    closeMenu();
                } else {
                    openMenu();
                }
            }
            
            // Handle keyboard on label (arrow icon)
            label.addEventListener('keydown', function(e) {
                switch(e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        toggleMenu();
                        break;
                    case 'Escape':
                        e.preventDefault();
                        closeMenu();
                        link.focus();
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        openMenu();
                        break;
                }
            });
            
            // Handle keyboard on link
            link.addEventListener('keydown', function(e) {
                switch(e.key) {
                    case 'Enter':
                        // Let Enter navigate to the link
                        // But if Shift+Enter, toggle menu instead
                        if (e.shiftKey) {
                            e.preventDefault();
                            toggleMenu();
                        }
                        // Otherwise let default behavior (navigate)
                        break;
                    case ' ':
                        e.preventDefault();
                        toggleMenu();
                        break;
                    case 'Escape':
                        e.preventDefault();
                        closeMenu();
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        openMenu();
                        break;
                    case 'ArrowRight':
                        // Move focus to the toggle button (label)
                        e.preventDefault();
                        label.focus();
                        break;
                }
            });
            
            // Handle keyboard navigation within dropdown
            dropdownLinks.forEach(function(dropdownLink, index) {
                dropdownLink.addEventListener('keydown', function(e) {
                    switch(e.key) {
                        case 'Escape':
                            e.preventDefault();
                            closeMenu();
                            label.focus();
                            break;
                        case 'ArrowDown':
                            e.preventDefault();
                            if (index < dropdownLinks.length - 1) {
                                dropdownLinks[index + 1].focus();
                            }
                            break;
                        case 'ArrowUp':
                            e.preventDefault();
                            if (index > 0) {
                                dropdownLinks[index - 1].focus();
                            } else {
                                label.focus();
                            }
                            break;
                        case 'Tab':
                            // Allow natural tab, but close menu
                            closeMenu();
                            break;
                    }
                });
            });
            
            // Close menu when focus leaves the menu item entirely
            menuItem.addEventListener('focusout', function(e) {
                setTimeout(function() {
                    if (!menuItem.contains(document.activeElement)) {
                        closeMenu();
                    }
                }, 100);
            });
            
            // Update aria-expanded when checkbox changes (from any source)
            checkbox.addEventListener('change', function() {
                link.setAttribute('aria-expanded', isOpen() ? 'true' : 'false');
                if (isOpen()) {
                    menuItem.classList.add('keyboard-open');
                } else {
                    menuItem.classList.remove('keyboard-open');
                }
            });
        });
        
        // Handle language selector (uses <a href="#"> so it's already focusable)
        const langSelector = document.querySelector('#portal-navbar .nav-lang.has_subtree');
        if (langSelector) {
            const langLink = langSelector.querySelector('a.nav-link');
            const langDropdown = langSelector.querySelector('ul.dropdown');
            
            if (langLink && langDropdown) {
                langLink.setAttribute('aria-haspopup', 'true');
                langLink.setAttribute('aria-expanded', 'false');
                langDropdown.setAttribute('role', 'menu');
                
                let langOpen = false;
                
                function openLangMenu() {
                    if (!langOpen) {
                        langSelector.classList.add('keyboard-open');
                        langLink.setAttribute('aria-expanded', 'true');
                        langOpen = true;
                    }
                }
                
                function closeLangMenu() {
                    if (langOpen) {
                        langSelector.classList.remove('keyboard-open');
                        langLink.setAttribute('aria-expanded', 'false');
                        langOpen = false;
                    }
                }
                
                // Prevent default navigation
                langLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (langOpen) {
                        closeLangMenu();
                    } else {
                        openLangMenu();
                    }
                });
                
                langLink.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (langOpen) {
                            closeLangMenu();
                        } else {
                            openLangMenu();
                        }
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        closeLangMenu();
                    } else if (e.key === 'ArrowDown' && !langOpen) {
                        e.preventDefault();
                        openLangMenu();
                    }
                });
                
                langSelector.addEventListener('focusout', function(e) {
                    setTimeout(function() {
                        if (!langSelector.contains(document.activeElement)) {
                            closeLangMenu();
                        }
                    }, 100);
                });
                
                langSelector.addEventListener('mouseleave', function() {
                    closeLangMenu();
                });
            }
        }
    });
})();

/*  FIN menu_accessibility.js */
/*  INICIO skip_to_content.js */
/*  Mejora la funcionalidad del enlace "Skip to Content" para accesibilidad */

(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const skipLink = document.querySelector('.skip-to-content');
        
        if (!skipLink) {
            return;
        }
        
        skipLink.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Prevent default scroll behavior
                e.preventDefault();
                
                // Add tabindex if not present to make element focusable
                if (!targetElement.hasAttribute('tabindex')) {
                    targetElement.setAttribute('tabindex', '-1');
                }
                
                // Focus the target element
                targetElement.focus();
                
                // Scroll to the element
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Remove tabindex after focus to restore normal tab flow
                // (only if we added it)
                targetElement.addEventListener('blur', function() {
                    if (targetElement.getAttribute('tabindex') === '-1') {
                        targetElement.removeAttribute('tabindex');
                    }
                }, { once: true });
            }
        });
    });
})();

/*  FIN skip_to_content.js */
$(document).ready(function(){

    setTimeout(function(){
        $(".slide-track").each(function(){
            var width_track = 0;
            $(this).children('.slide').each(function(index) {
                width_track += parseInt($(this).width(), 10) + 50;
            });
            $(this).css("--size", width_track + "px");
            $(this).css("--nsize", "-" + width_track + "px");
        });
    }, 500);

});

