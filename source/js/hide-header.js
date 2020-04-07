$(function() {


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || prevScrollpos < 500) {
            document.getElementById("page-header").style.top = "0";
        } else {
            document.getElementById("page-header").style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }

});