const toggleBtn = document.querySelector(
        ".nav-body .mobile-nav__toggle button"
    ),
    navItems = document.querySelector(".nav-body__items"),
    overlay = document.querySelector(".mobile-overlay");

let isNavOpen = false;

const toggleNav = () => {
    if (!isNavOpen) {
        navItems.style.display = "block";
        overlay.style.display = "block";
        toggleBtn.innerHTML = `<img src='images/icon-close.svg' alt='Menu Toggle'/>`;
        document.body.style.overflow = "hidden";
    } else {
        toggleBtn.innerHTML = `<img src='images/icon-hamburger.svg' alt='Menu Toggle' />`;
        navItems.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "scroll";
    }

    isNavOpen = !isNavOpen;
};

toggleBtn.addEventListener("click", toggleNav);
