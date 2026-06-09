        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');

        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
            mobileNav.setAttribute('aria-hidden', !isOpen);
        });

        // Close drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
                closeMobileNav();
            }
        });

        function closeMobileNav() {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            mobileNav.setAttribute('aria-hidden', true);
        }


const swiper = new Swiper('.swiper', {
 // Optional parameters
 direction: 'horizontal',
 loop: true,
 autoplay:{
    delay: 5000,
    disableOnInteraction: false,
 },
 // If we need pagination
 pagination: {
   el: '.swiper-pagination',
 },
 // Navigation arrows
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
 // And if we need scrollbar
 scrollbar: {
   el: '.swiper-scrollbar',
 },
});

// image slider
const container = document.querySelector(".rotate-slide-container");

container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("rotate-slide-img")) return;

    const images = container.querySelectorAll(".rotate-slide-img");

    // Click left image
    if (e.target === images[0]) {
        container.insertBefore(images[2], images[0]);
    }

    // Click right image
    else if (e.target === images[2]) {
        container.insertBefore(images[2], images[0]);
    }

    updateActive();
});

function updateActive() {
    document.querySelectorAll(".rotate-slide-img").forEach(img =>
        img.classList.remove("active", "poster-1", "poster-2", "poster-3")
    );

    const images = document.querySelectorAll(".rotate-slide-img");

    images[0].classList.add("poster-1");
    images[1].classList.add("poster-2", "active");
    images[2].classList.add("poster-3");
}

updateActive();