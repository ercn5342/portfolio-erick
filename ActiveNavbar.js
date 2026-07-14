
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.navbar .nav-link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));
