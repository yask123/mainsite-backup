$(document).ready(function() {

    var scroll = function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
            return false;
            }
        }
    }

    $('a[href*=#]:not([href=#])').click(scroll);

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar").addClass("active");
    });

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar").removeClass("active");
    });

    $(".top").height($(window).height());

    $(window).scroll(function(e) {
        var s = $(window).scrollTop(), opacityVal = (s / 350.0);

        $('.bg-blurred').css('opacity', opacityVal);
    });

});
