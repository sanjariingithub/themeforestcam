jQuery(function ($) {

    'use strict';

    // hero Carousel

    $('.hero-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Hot Deals Carousel ends

    $('.hot-deals__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300:{
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});