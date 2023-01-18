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
