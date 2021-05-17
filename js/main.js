$('.hero-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

})
$('.pag-slider').owlCarousel({

    center: true,
    loop: true,
    margin: 5,
    responsiveClass: true,

    nav: true,


    responsive: {
        0: {
            items: 1
        },
        570: {
            items: 2
        },

        991: {
            items: 2
        },
        1000: {
            items: 3
        },
        1180: {
            items: 3
        }


    }

})


