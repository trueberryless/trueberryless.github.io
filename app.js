function BodyScrollActive() {
    let body = document.body;

    if (window.scrollY == 0) {
        body.setAttribute("top-active", "");
    } else if (window.innerHeight + window.scrollY >= document.body.parentNode.offsetHeight) {
        console.log("TRUE");
        body.setAttribute("bottom-active", "");
    } else {
        body.removeAttribute("top-active");
        body.removeAttribute("bottom-active");
    }
}

function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function ScrollTo(id) {
    window.scrollTo({ top: $("#" + id).offset().top - 100, behavior: "smooth" });
}

function ScrollBottom() {
    window.scrollTo({ top: document.body.parentNode.offsetHeight, behavior: "smooth" });
}

window.addEventListener("load", (event) => {
    BodyScrollActive();

    window.addEventListener("scroll", function () {
        BodyScrollActive();
    });
});
