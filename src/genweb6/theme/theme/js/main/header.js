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
