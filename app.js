function HeaderTopActive() {
    let header = document.getElementById("header");
    if (window.scrollY == 0) {
        header.setAttribute("top-active", "");
    } else {
        header.removeAttribute("top-active");
    }
}

window.addEventListener("load", (event) => {
    HeaderTopActive();

    window.addEventListener("scroll", function () {
        HeaderTopActive();
    });
});
