$(document).ready(function() {

    $(".top").height($(window).height());

    var scroll = function() {
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
    };

    $('a[href*=#]:not([href=#])').click(scroll);

    // sidebar animation
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("#sidebar").addClass("active");
    });

    $("#menu-close").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("#sidebar").removeClass("active");
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
    $(".btn-twitter1").mouseover(function(e) {
        $(".bg").css("background", "#2094ca");
    });

    $(".btn-github1").mouseover(function(e) {
        $(".bg").css("background", "#4a535b");
    });

});
