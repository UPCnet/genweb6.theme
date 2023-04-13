$(document).ready(function(){

    if($('iframe.resizeIframe').length > 0) {

        setInterval(function(){

            $('iframe.resizeIframe').each(function(index){

                $(this)[index].height = $(this)[index].contentWindow.document.body.scrollHeight + "px";

            });

        }, 500);

    }

});
