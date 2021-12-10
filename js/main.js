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

var testiBelt = document.getElementById("testimonial-belt");
var rightTestiArrow = document.getElementById("testimonial-arrow-right");
var leftTestiArrow = document.getElementById("testimonial-arrow-left");


rightTestiArrow.addEventListener('click', function () {
    if (testiBelt.style != "translateX(0%)") {
        rightTestiArrow.addEventListener('click', function () {
            testiBelt.style.transform = "translateX(-33.33%)";
            console.log("Den var 0");
        });
    } else if (testiBelt.style != "translateX(-33.33%)") {
        testiBelt.style.transform = "translateX(-66.66%)";
        console.log("Den var -33");
    }
});
