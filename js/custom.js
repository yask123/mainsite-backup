$(document).ready(function() {

    // set height of the main top page the same as height of browser window
    $(".top").height($(window).height());

    // set equal height for all jumbotrons
    function heightJumbotrons() {
        for (var i = 0; i < $(".jumbotron").length; i++) {
            if (($(".jumbotron:not(#minibio)").eq(i).height() < $(window).height()) &&
                ($(".jumbotron:not(#subscribe)").eq(i).height() < $(window).height())) {
                $(".jumbotron").eq(i).height($(window).height());
            }
        }
    }

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
        $(".page-wrapper").addClass("moveRight");
    }

    function closeSidebar() {
        $("#sidebar").removeClass("active");
        $("#menu-toggle").removeClass("active");
        $(".page-wrapper").removeClass("moveRight");
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
        heightJumbotrons();
    });

    if ($(window).width() > 568) {
        // make single items equal height only if we are not in mobile viewport
        // make cards in work section the same height
        equalHeight($(".jumbotron#work .single-item"));
        // make cards in projects secton the same height
        equalHeight($(".jumbotron#projects .single-item"));
        heightJumbotrons();
    }

    // set equal height for all items
    function equalHeight(group) {
        tallest = 0;
        group.each(function() {
            thisHeight = $(this).height();
            if(thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }

    // Background changing magic
    $.fx.interval = -2000;
    (function (bg, btn) {
        btn.mouseover(function(e) {
          bg.fadeTo(75, 0.9, "linear", function () {
            bg.fadeTo(75, 1.0, "linear", function () {
                bg.css("backgroundImage", "url(/images/schemes/orange.svg)");
            });
          });
        });
    }($(".bg"), $(".btn-blog")));

    $.fx.interval = -2000;
    (function (bg, btn) {
        btn.mouseover(function(e) {
          bg.fadeTo(75, 0.9, "linear", function () {
            bg.fadeTo(75, 1.0, "linear", function () {
                bg.css("backgroundImage", "url(/images/schemes/blue.svg)");
            });
          });
        });
    }($(".bg"), $(".btn-twitter")));

    $.fx.interval = -2000;
    (function (bg, btn) {
        btn.mouseover(function(e) {
          bg.fadeTo(75, 0.9, "linear", function () {
            bg.fadeTo(75, 1.0, "linear", function () {
                bg.css("backgroundImage", "url(/images/schemes/gray.svg)");
            });
          });
        });
    }($(".bg"), $(".btn-github")));

    $.fx.interval = -2000;
    (function (bg, btn) {
        btn.mouseover(function(e) {
          bg.fadeTo(75, 0.9, "linear", function () {
            bg.fadeTo(75, 1.0, "linear", function () {
                bg.css("backgroundImage", "url(/images/schemes/purple.svg)");
            });
          });
        });
    }($(".bg"), $(".btn-linkedin")));

});
