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