const goTopElement = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopElement.addEventListener("click", goTop);

function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopElement.classList.add("go-top--show");
    } else {
        goTopElement.classList.remove("go-top--show");
    }
}

function goTop() {

    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}