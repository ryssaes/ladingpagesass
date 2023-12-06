$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});


const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    event.preventDefault();
    const nav = document.getElementById("menu-mobile");
    nav.classList.toggle("active");
    console.log(nav);
    
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);