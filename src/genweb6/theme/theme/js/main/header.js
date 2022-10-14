/*  INICIO header.js */

$(document).ready(function(){

    var btt_offset = 1;

    $(window).scroll(function() {
        if($(this).scrollTop() > btt_offset){
            $('#header').addClass('shink');
        }else{
            $('#header').removeClass('shink');
        }
    });

    $('#portal-navbar-mobile nav.navbar li.has_subtree label').on('click', function(){
        $(this).closest('li.has_subtree').toggleClass('open');
    });
});

/*  FIN header.js */
