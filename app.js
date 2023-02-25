// const header = document.querySelector("#header");
// const intro_img = document.querySelector("#intro-img");
// const headline = document.querySelector("#headline");
// const slider = document.querySelector("#slider");

// const tl = new TimelineMax();

// tl.fromTo(intro_img, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
//     .fromTo(intro_img, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
//     .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(headline, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5")
//     .fromTo(header, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5");

function BodyScrollActive() {
    let body = document.body;

    if (window.scrollY == 0) {
        body.setAttribute("top-active", "");
    } else if (window.innerHeight + window.scrollY >= document.body.parentNode.offsetHeight) {
        body.setAttribute("bottom-active", "");
    } else {
        body.removeAttribute("top-active");
        body.removeAttribute("bottom-active");
    }

    if (window.innerHeight + window.scrollY >= document.body.parentNode.offsetHeight - 1000) {
        body.removeAttribute("not-near-bottom");
    } else {
        body.setAttribute("not-near-bottom", "");
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

function ProgressBarOnScroll() {
    var dh = $(document).height(),
        wh = $(window).height();

    scrollPercent = (window.scrollY / (dh - wh)) * 100;
    startValue = 1;
    endValue = 89;

    scrollPercent = ((endValue - startValue) / 100) * scrollPercent + startValue;

    $("#progressbar").css("top", scrollPercent + "%");
}

const ProgressBarOnMove = function (e) {
    // How far the mouse has been moved
    const dy = e.clientY - y;

    // Scroll
    window.scrollBy(dy);

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
};

const ProgressBarOnUp = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", ProgressBarOnMove);
    document.removeEventListener("mouseup", ProgressBarOnUp);
};

window.addEventListener("load", (event) => {
    BodyScrollActive();

    window.addEventListener("scroll", function () {
        BodyScrollActive();
    });
});

$(window).scroll(function () {
    ProgressBarOnScroll();
});

function VanillaTiltEffect() {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        reverse: Math.random() > 0.7 ? true : false,
        scale: (Math.random() * 9 + 95) / 105,
        max: Math.random() * 15 + 4,
        speed: Math.random() * 1000 + 500,
        glare: true,
        "max-glare": Math.random() * Math.random(),
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
    });
}

function CardContentTransform() {
    var contents = document.querySelectorAll(".content");

    // create an Observer instance
    const resizeObserver = new ResizeObserver((content) => {
        content[0].target.style.transform =
            "translateY(calc(var(--width) * 4 / 3 * 0.8 - " +
            content[0].target.clientHeight +
            "px + 32px)) translateZ(20px)";
    });

    contents.forEach((content) => {
        // start observing a DOM node
        resizeObserver.observe(content);
    });
}

function ITyped() {
    const e1 = document.getElementById("ityped-felix-schneider");

    ityped.init(e1, {
        showCursor: true,
        backDelay: 1500,
        // loop: true,
        strings: [
            " is a Programmer.",
            " is highly motivated.",
            " is a Designer.",
            " is flexible.",
            " is a Full Stack Developer.",
            " is resourceful.",
            " is proactive.",
            " is supportive.",
            " is self-confident.",
            " will be your next employee!",
        ],
    });

    const e2 = document.getElementById("ityped-little-schneider");

    ityped.init(e2, {
        showCursor: true,
        backDelay: 1500,
        // loop: true,
        strings: [
            " was cut.",
            " liked playing golf.",
            " was interested in trains.",
            " loved music.",
            " had a dream childhood.",
            " loved sports.",
            " liked playing outside.",
            " is happy.",
        ],
    });
}

function OnLoad() {
    VanillaTiltEffect();
    ITyped();
    CardContentTransform();
}
