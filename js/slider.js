const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        459: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    // allowSlidePrev: false,
    pagination: false,
    navigation: {
        nextEl: ".mySwiper2 .swiper-button-next",
        prevEl: ".mySwiper2 .swiper-button-prev",
    },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        459: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});



const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: false,
    navigation: {
        nextEl: ".mySwiper5 .swiper-button-next",
        prevEl: ".mySwiper5 .swiper-button-prev",
    },
    breakpoints: {
        1500: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        459: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

