$(document).ready(function() {

    // set height of the main top page the same as height of browser window
    $(".top").height($(window).height());

    // on initial load, hide sidebar pannel
    $("#menu-toggle").hide();
    // when scrolling beyond top part, show menu
    $(window).bind('scroll', function() {
        if($(this).scrollTop() >= $("#top").height()) {
            $("#menu-toggle").show();
        } else {
            $("#menu-toggle").hide();
        }
    })

    var scroll;

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

    $(document).click(function() {
        if ($("#sidebar").hasClass("active")) {
            $("#sidebar").removeClass("active");
        }
    });

    $(window).resize(function () {
        // for a single paged top part
        $(".top").height($(window).height());
    });

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
    $(document).ready(function() {
       equalHeight($(".jumbotron#work > .row > .col-md-4 > .single-item"));
    });
    $(document).ready(function() {
       equalHeight($(".jumbotron#projects > .row > .col-md-4 > .single-item"));
    });

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
