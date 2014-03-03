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

    $('body').keyup(function(event) {
        var location = window.pageYOffset;
        var height = $(window).height();
        var delta = 3*height/4;
        var time = 200;

        if (event.keyCode == 39 || event.keyCode == 40) {
            $('html, body').animate({scrollTop: location+delta}, time);
        } else if (event.keyCode == 37 || event.keyCode == 38) {
            $('html, body').animate({scrollTop: location-delta}, time);
        } 
    });
});
