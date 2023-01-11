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

