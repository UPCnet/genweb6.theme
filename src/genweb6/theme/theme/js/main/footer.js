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
