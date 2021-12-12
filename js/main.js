// BURGERMENU
const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks2');
    const navLinks = document.querySelectorAll('.navlinks2 li');

    const navAn = document.querySelector('.burger1');
    const navLinksAn = document.querySelectorAll('.burger1 li');

    function toggleBurger() {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        /*       //Animate Links
               navLinksAn.forEach((link, index) => {
                   if (link.style.animation) {
                       link.style.animation = ''
                   } else {
                       link.style.animation = `navLinkFade 0.3s ease forwards ${index / 6 + 0.3}s`;
                   }
               });
               */

        //Burger Animation
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', () => {
        toggleBurger();
    });

    // Close on click anywhere
    /*    nav.addEventListener('click', () => {
            toggleBurger();
        });
    */
}

navslide();


// Stop Lottie at last frame
var videoEl = document.getElementById("laark-lottie");

videoEl.addEventListener("timeupdate", function () {
    console.log('checking time...');
    if (videoEl.currentTime > videoEl.duration - 0.5) {
        // 0.5 is seconds before end.
        videoEl.pause();
    }
});



// Change menu color

// Position on current scrollposition
var scrollpos = window.scrollY;
var nav = document.getElementById("nav");
var menuLogo = document.querySelector("#nav-logo IMG");

window.addEventListener('scroll', function () {
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if (scrollpos > window.innerHeight - 60) {
        nav.classList.add("solid-menu");
        menuLogo.src = "./img/logo/laark-logo-midnight.png";
    } else {
        nav.classList.remove("solid-menu");
        menuLogo.src = "./img/logo/laark-logo-marble.png";
    }
});






// Testimonial slider

var testimonialBelt = document.getElementById("testimonial-belt");
var rightTestimonialArrow = document.getElementById("testimonial-arrow-right");
var leftTestimonialArrow = document.getElementById("testimonial-arrow-left");

slidePos = 0;

rightTestimonialArrow.addEventListener('click', function () {
    // Subtract from the value of slidePos
    slidePos -= 33.33;
    // Set belt transformX to slidePos value + %
    testimonialBelt.style.transform = "translateX(" + slidePos + "%)";

    stopSlider()
});

leftTestimonialArrow.addEventListener('click', function () {
    // Add to the value of slidePos
    slidePos += 33.33;
    // Set belt transformX to slidePos value + %
    testimonialBelt.style.transform = "translateX(" + slidePos + "%)";

    stopSlider()
});

function stopSlider() {
    if (testimonialBelt.style.transform == "translateX(33.33%)") {
        console.log("Du kan ikke komme længere tilbage");
        slidePos = 0;
        testimonialBelt.style.transform = "translateX(" + slidePos + "%)";
        highlightCarouselDots()

    } else if ((testimonialBelt.style.transform == "translateX(-99.99%)")) {
        console.log("Du kan ikke komme længere frem");
        slidePos = -66.66;
        testimonialBelt.style.transform = "translateX(" + slidePos + "%)";
        highlightCarouselDots()
    }
}

var carouselDot = document.querySelectorAll(".carousel-dot")
for (let i = 0; i < carouselDot.length; i++) {
    carouselDot[i].addEventListener('click', function () {
        testimonialBelt.style.transform = "translateX(" + i * -33.33 + "%)";
        highlightCarouselDots()
    });
}

function highlightCarouselDots() {
    if (testimonialBelt.style.transform == "translateX(0%)") {
        carouselDot[0].classList.add("active");
    } else if (testimonialBelt.style.transform == "translateX(-33.33%)") {
        carouselDot[1].classList.add("active");
    } else if (testimonialBelt.style.transform == "translateX(-66.66%)") {
        carouselDot[2].classList.add("active");
    }
}
