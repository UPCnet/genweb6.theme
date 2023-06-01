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
function copyToClipboard(element) {
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

