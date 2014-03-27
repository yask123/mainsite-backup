$(document).ready(function() {

    var scroll = function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
            return false;
            }
        }
    }
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

    // for a single paged top part
    $(".top").height($(window).height());

    // parallex blur
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(), opacityVal = (s / 350.0);
        $('.bg-blurred').css('opacity', opacityVal);
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

});
