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
