$(() => {
    $('.territory-card>.pictures').each((i, elem) => {
        $(elem).slick({
            arrows: true,
            appendArrows: $(elem).siblings('.contains-picture-slider').find('.slider'),
            prevArrow: '<button class="slider-btn back"></button>',
            nextArrow: '<button class="slider-btn forw"></button>',
            dots: false,
            infinite: false
        });
    });
    $('.decoration-option>.pictures').each((i, elem) => {
        $(elem).slick({
            arrows: true,
            appendArrows: $(elem).siblings('.contains-picture-slider').find('.slider'),
            prevArrow: '<button class="slider-btn back"></button>',
            nextArrow: '<button class="slider-btn forw"></button>',
            dots: false,
            infinite: false
        });
    });
    $('.house-pick-card>.pictures').each((i, elem) => {
        $(elem).slick({
            arrows: true,
            appendArrows: $(elem).siblings('.slider'),
            prevArrow: '<button class="slider-btn back"></button>',
            nextArrow: '<button class="slider-btn forw"></button>',
            dots: false,
            infinite: true
        });
    });
    $('.showroom-slides-images>.pictures').each((i, elem) => {
        $(elem).slick({
            arrows: true,
            appendArrows: $(elem).parents('.showroom-slides').find('.slider'),
            prevArrow: '<button class="slider-btn back"></button>',
            nextArrow: '<button class="slider-btn forw"></button>',
            dots: true,
            appendDots: $(elem).parents('.showroom-slides').find('.slider'),
            dotsClass: 'slide-dots',
            infinite: false
        });
    });

    $('.cottage-plan-floor').click((e) => {
        $('.cottage-plan-floor').removeClass('active')
        let elem = e.target;
        if ($(elem).attr('class') !== 'cottage-plan-floor') {
            elem = $(elem).parents('.cottage-plan-floor');
        }
        const floorNum = $(elem).data('floor');
        $(elem).addClass('active');
        const images = $(elem).parent('.cottage-plan-floors').siblings('.cottage-plan-image')
        $(images).find('img').hide();
        $(images).find(`img[data-floor=${floorNum}]`).show();
    })

    // т.к. везде только телефон, обработка одинаковая
    $('form').submit((e) => {
        e.preventDefault();
        const phoneNum = $(e.target).find('input[name="phone"]').val();
        const phoneRegexp = /[7|8]-?\d{3}-?\d{3}-?\d{2}-?\d{2}/
        if (!phoneRegexp.test(phoneNum)) {
            alert('Формат телефона не соответствует')
        } else {
            console.log('Sending...done!')
        }
    })


});