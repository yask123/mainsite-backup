$(document).ready(function() {

    // set height of the main top page the same as height of browser window
    $(".top").height($(window).height());

    // for (var i = 0; i < $(".jumbotron").length; i++) {
    //     if ($(".jumbotron").eq(i).height() < $(window).height()) {
    //         $(".jumbotron").eq(i).height($(window).height());
    //     }
    // }

    // on initial load, hide sidebar pannel
    $("#menu-toggle").hide();
    // when scrolling beyond top part, show menu
    $(window).bind('scroll', function() {
        if($(this).scrollTop() >= $("#top").height()) {
            $("#menu-toggle").show();
        } else {
            $("#menu-toggle").hide();
        }
    });

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
        $("#sidebar").addClass("active");
        $(".page-wrapper").addClass("moveRight");
    });

    $("#menu-close").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("#sidebar").removeClass("active");
        $(".page-wrapper").removeClass("moveRight");
    });

    function closeSidebar() {
        if ($("#sidebar").hasClass("active")) {
            $("#sidebar").removeClass("active");
            $(".page-wrapper").removeClass("moveRight");
        }
    }

    $(document).click(function() {
        closeSidebar();
    });

    $("#sidebar a").click(function() {
        setTimeout(closeSidebar, 500);
    });

    // fluid response when browser size changes
    $(window).resize(function () {
        // for a single paged top part
        $(".top").height($(window).height());
    });

    // make cards in work section the same height
    equalHeight($(".jumbotron#work .single-item"));
    // make cards in projects secton the same height
    equalHeight($(".jumbotron#projects .single-item"));

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

    // change bg color on selecting different social networks
    $(".btn-twitter").mouseover(function(e) {
        $(".bg").css("background", "#2094ca");
    });

    $(".btn-github").mouseover(function(e) {
        $(".bg").css("background", "#4a535b");
    });

    $(".btn-email").mouseover(function(e) {
        $(".bg").css("background", "#DD4B39");
    });

    $(".btn-linkedin").mouseover(function(e) {
        $(".bg").css("background", "#0077b5");
    });

    $(".btn-gplus").mouseover(function(e) {
        $(".bg").css("background", "#DD4B39");
    });

});
