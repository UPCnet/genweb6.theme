/*  INICIO viewlet_gw_cookies.js */

function createCookie(name, value, days) {
    var date, expires;

    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    document.cookie = name + "=" + escape(value) + expires + "; path=/;";
}

function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i,
        c;

    for (i = 0; i < ca.length; i = i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return unescape(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
    if (c_start == -1) c_value = null;
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) c_end = c_value.length;
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

$(document).ready(function(){
    if (getCookie('cookieAccepted') != "1") {
        $("#cookies-gw").css("display", "block");
    } else {
        $("#cookies-gw").css("display", "none");
    }

    $("#cookies-accept").click(function() {
        setCookie('cookieAccepted', '1', 365);
        $("#cookies-gw").css("display", "none");
    });
});

/*  FIN viewlet_gw_cookies.js */
