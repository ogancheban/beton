



function counter(event) {
    var element = event.target;         // DOM element, in this example .owl-carousel
    var items = event.item.count;     // Number of items
    var item = event.item.index + 1;     // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
        item = item - items
    }
    $('#counter').html("item " + item + " / " + items)
};

$(document).ready(function () {
    $("#heroslider").owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: false,
        pagination: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        items: 1,
        lazyLoad: true,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter //When the translation of the stage has finished.

    });
    $("#dorslider").owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        center: true,



    });


});

