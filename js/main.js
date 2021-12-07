


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


  