$(() => {
    $('.pictures').slick({
        arrows: true,
        appendArrows: $(this).siblings('.contains-picture-slider').find('.slider'),
        prevArrow: '<button class="slider-btn back"></button>',
        nextArrow: '<button class="slider-btn forw"></button>',
        dots: false,
    });
});