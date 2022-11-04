function scrollFooter(bottomscrollY, contentHeight, footerHeight) {
    var footerContent = document.getElementById("footer-content");
    if (bottomscrollY > contentHeight) {
        var transformFooterY = ((bottomscrollY - contentHeight) / footerHeight) * 100;
        footerContent.style.height = transformFooterY + "%";
    } else {
        footerContent.style.height = "100%";
    }
}

window.addEventListener("load", (event) => {
    var windowHeight = window.innerHeight,
        footerHeight = document.getElementById("footer").clientHeight,
        contentHeight = document.getElementById("content").clientHeight;

    var bottomscrollY = window.scrollY + windowHeight;
    scrollFooter(bottomscrollY, contentHeight, footerHeight);

    window.addEventListener("scroll", function () {
        var bottomscrollY = window.scrollY + windowHeight;
        scrollFooter(bottomscrollY, contentHeight, footerHeight);
    });

    window.addEventListener("resize", function () {
        windowHeight = window.innerHeight;
        footerHeight = document.getElementById("footer").clientHeight;
        contentHeight = document.getElementById("content").clientHeight;
    });
});
