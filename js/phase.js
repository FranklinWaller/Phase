
function phsHidePopup() {
    var popupTop = "125%";

    if (window.matchMedia("(max-width: 542px)").matches) {
        popupTop = "100%";
    }


    $('.phs-popup').animate({
        top: popupTop
    }, 250, function() {
        $(this).hide();
    });
}

function phsShowPopup() {
    var popupTop = "50%";

    if (window.matchMedia("(max-width: 542px)").matches) {
        popupTop = "0";
    }

    var popup = $('.phs-popup');
    popup.show();
    popup.animate({
        top: popupTop
    }, 250);
}


$(document).ready(function() {

    var sidemenuopen = false;

    $(".phs-sidemenu-open").click(function(e) {
        e.preventDefault();
        $(".phs-sidemenu").show();
        $(".phs-sidemenu").animate({
            left: '0'
        }, 250, function() {
            sidemenuopen = true;
        });
    });

    $("html").click(function() {
        if (sidemenuopen) {
            $(".phs-sidemenu").animate({
                left: '-75%'
            }, 250, function() {
                $(this).hide();
                sidemenuopen = false;
            });
        }

    });

    $(".phs-sidemenu").click(function(e) {
        e.stopPropagation();
    });
});









