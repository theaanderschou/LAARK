// BURGERMENU
const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks2');
    const navLinks = document.querySelectorAll('.navlinks2 li');

    const navAn = document.querySelector('.burger1');
    const navLinksAn = document.querySelectorAll('.burger1 li');

    var body = document.querySelector("BODY");

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
        body.classList.toggle('no-scroll');
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
function lottiePlayer() {
    var videoEl = document.getElementById("laark-lottie");

    videoEl.addEventListener("timeupdate", function () {
        console.log('checking time...');
        if (videoEl.currentTime > videoEl.duration - 0.5) {
            // 0.5 is seconds before end.
            videoEl.pause();
        }
    });

}



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
function testimonialSlider() {
    var testimonialBelt = document.getElementById("testimonial-belt");
    var rightTestimonialArrow = document.getElementById("testimonial-arrow-right");
    var leftTestimonialArrow = document.getElementById("testimonial-arrow-left");
    var testimonialImage = document.getElementById("testimonial-image");

    slidePos = 0;

    rightTestimonialArrow.addEventListener('click', function () {
        // Subtract from the value of slidePos
        slidePos -= 33.33;
        // Set belt transformX to slidePos value + %
        testimonialBelt.style.transform = "translateX(" + slidePos + "%)";

        highlightCarouselDots()
        stopSlider()
    });

    leftTestimonialArrow.addEventListener('click', function () {
        // Add to the value of slidePos
        slidePos += 33.33;
        // Set belt transformX to slidePos value + %
        testimonialBelt.style.transform = "translateX(" + slidePos + "%)";

        highlightCarouselDots()
        stopSlider()
    });

    // Stop slider from going into space
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
        for (let i = 0; i < carouselDot.length; i++) {
            carouselDot[i].classList.remove("active");
        }

        if (testimonialBelt.style.transform == "translateX(0%)") {
            carouselDot[0].classList.add("active");
            testimonialImage.src = "img/persona/kurt.png";
        } else if (testimonialBelt.style.transform == "translateX(-33.33%)") {
            carouselDot[1].classList.add("active");
            testimonialImage.src = "img/persona/helena.png";
        } else if (testimonialBelt.style.transform == "translateX(-66.66%)") {
            carouselDot[2].classList.add("active");
            testimonialImage.src = "img/persona/henning.png";
        }
    }
}






// Sort projects

// Sort buttons
var allSortButtons = document.querySelectorAll(".project-category")
var sortBySchool = document.getElementById("school");
var sortByHealth = document.getElementById("health");
var sortByTransformation = document.getElementById("transformation");
var sortByResidence = document.getElementById("residence");

var allProjects = document.querySelectorAll(".project");
var schoolTag = document.querySelectorAll(".school");
var healthTag = document.querySelectorAll(".health");
var transformationTag = document.querySelectorAll(".transformation");
var residenceTag = document.querySelectorAll(".residence");

function hideAllProjects() {
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].classList.add("hidden");
    }
}

function clearSortButtons() {
    for (let i = 0; i < allSortButtons.length; i++) {
        allSortButtons[i].classList.remove("active");
    }
}


sortBySchool.addEventListener('click', function () {
    hideAllProjects()
    clearSortButtons()
    this.classList.add("active");
    for (let i = 0; i < schoolTag.length; i++) {
        schoolTag[i].classList.remove("hidden");
    }
});

sortByHealth.addEventListener('click', function () {
    hideAllProjects()
    clearSortButtons()
    this.classList.add("active");
    for (let i = 0; i < healthTag.length; i++) {
        healthTag[i].classList.remove("hidden");
    }
});

sortByTransformation.addEventListener('click', function () {
    hideAllProjects()
    clearSortButtons()
    this.classList.add("active");
    for (let i = 0; i < transformationTag.length; i++) {
        transformationTag[i].classList.remove("hidden");
    }
});

sortByResidence.addEventListener('click', function () {
    hideAllProjects()
    clearSortButtons()
    this.classList.add("active");
    for (let i = 0; i < residenceTag.length; i++) {
        residenceTag[i].classList.remove("hidden");
    }
});
