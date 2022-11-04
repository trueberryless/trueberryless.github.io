function NavbarAnimation() {
    let navbar = document.getElementById("navbar");
    let navbar_image = document.getElementById("navbar_image");
    let navbar_text = document.getElementById("navbar_text");
    let navbar_links = document.getElementById("navbar_links");

    if (navbar != null) {
        let animated = false;

        navbar.addEventListener("mouseenter", function (event) {
            animated = true;
            console.log("Animation started!");
            navbar.setAttribute("opened", "");
        });

        navbar.addEventListener("mouseleave", function (event) {
            animated = false;
            while (animated) {
                navbar.removeAttribute("opened");
            }
        });

        navbar.addEventListener(
            "animationend",
            function () {
                animated = false;
            },
            false
        );
    }
}

NavbarAnimation();
