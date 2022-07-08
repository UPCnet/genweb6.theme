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

});

/*  FIN header.js */
