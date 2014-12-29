$(document).ready(function() {

    // set height of the main top page the same as height of browser window
    $(".top").height($(window).height());

    // smooth scroll
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            return false;
            }
        }
    });

    // sidebar animation
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("#sidebar").hasClass("active")) {
            // close sidebar
            closeSidebar();
        } else {
            // open sidebar
            openSidebar();
        }
    });

    function openSidebar() {
        $("#sidebar").addClass("active");
        $("#menu-toggle").addClass("active");
    }

    function closeSidebar() {
        $("#sidebar").removeClass("active");
        $("#menu-toggle").removeClass("active");
    }

    $(document).click(function() {
        if ($("#sidebar").hasClass("active")) {
            closeSidebar();
        }
    });

    $("#sidebar a").click(function() {
        setTimeout(closeSidebar, 500);
    });

    // fluid response when browser size changes
    $(window).resize(function () {
        // for a single paged top part
        $(".top").height($(window).height());
    });

});
