/* =====================================================
   TRUTHLENS AI
   LANDING PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   PARTICLES
===================================================== */

const particleContainer = document.getElementById("particles");

function createParticles() {

    if (!particleContainer) return;

    const numberOfParticles =
        window.innerWidth < 600 ? 35 : 70;

    for (let i = 0; i < numberOfParticles; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 2 + 1;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.animationDuration =
            Math.random() * 8 + 6 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particleContainer.appendChild(particle);
    }
}

createParticles();


/* =====================================================
   SCROLL
===================================================== */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =====================================================
   START INVESTIGATION
===================================================== */

function startInvestigation() {

    window.location.href = "/onboarding.html";

}


/* Automatically connect Start Investigation buttons */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(
            "#startInvestigation, .start-investigation, [data-start-investigation]"
        );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            window.location.href =
                "/onboarding.html";

        });

    });

});


/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const duration = 1400;

    const startTime =
        performance.now();

    function update(time) {

        const progress =
            Math.min(
                (time - startTime) / duration,
                1
            );

        current =
            Math.floor(progress * target);

        counter.textContent = current;

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            counter.textContent = target;

        }

    }

    requestAnimationFrame(update);
}


if (counters.length > 0) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        entry.target.classList.contains("counter")
                    ) {

                        animateCounter(entry.target);

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.6
            }
        );

    counters.forEach(counter => {
        observer.observe(counter);
    });

}


/* =====================================================
   NAVBAR
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .process-step, .stat-card"
    );

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });

}