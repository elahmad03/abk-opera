
    window.addEventListener("scroll", function() {
        var scrollToTopButton = document.getElementById("scrollToTop");
        if (document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    document.getElementById("scrollToTop").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

