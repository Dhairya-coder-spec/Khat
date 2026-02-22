// ===== Page Fade In =====
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});


// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
    ".card, .wish, .timeline-item, .letter-paper"
);

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===== Smooth Page Transition =====
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const target = this.getAttribute("href");

        if (target && target.includes(".html")) {
            e.preventDefault();
            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = target;
            }, 300);
        }
    });
});
