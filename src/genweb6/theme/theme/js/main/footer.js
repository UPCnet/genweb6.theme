/*  INICIO footer.js */
$(document).ready(function(){

    $('#portal-footer').addClass($('#footer-complementary').data('class'));
    $('#portal-footer').attr('style', '--bg-img-url: url(' + $('#footer-complementary').data('img') + ')');

});

/*  FIN footer.js */
