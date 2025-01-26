// Existing Carousel Initialization
$('#myCarousel').carousel({
    interval: 5000
});

$('#myCarousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

// Mixitup Initialization
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});

// Highlight Active Navigation Button
$('.main-menu ul li a').on('click', function() {
    // Remove active class from all links
    $('.main-menu ul li a').removeClass('active');

    // Add active class to the clicked link
    $(this).addClass('active');
});
