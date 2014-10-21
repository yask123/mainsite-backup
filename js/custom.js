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


    // Load up the hackathons map
    $("#map_canvas").width($(window).width());
    $("#map_canvas").height($(window).height());

    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            center: new google.maps.LatLng(50.903033, 10.496063),
            zoom: 8,
            scrollwheel: false
        });

        // Create a new LatLngBounds object
        var markerBounds = new google.maps.LatLngBounds();

        // Add your points to the LatLngBounds object.
        var markers = [];
        $.getJSON('/hackathons.json', function(data) {
            var hackathons = data.hackathons;
            for (var i in hackathons) {
                hackathon = hackathons[i];
                var point = new google.maps.LatLng(hackathon.latlng.split(',')[0],
                                                   hackathon.latlng.split(',')[1]);
                addMarker(point, hackathon);
                markerBounds.extend(point);
            }
            // Then you just call the fitBounds method and the Maps widget does all rest.
            map.fitBounds(markerBounds);
        });

        function addMarker(loc, hackathon) {
            var marker = new google.maps.Marker({
                position: loc,
                map: map,
                title: hackathon.name
            });
            var infowindow = new google.maps.InfoWindow({
                content: '<div id="map-content"><b>' + hackathon.name + 
                         '</b><br>' + '<em>' + hackathon.when + '<br> at <br>' + 
                         hackathon.place + '</em>'
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }

});
