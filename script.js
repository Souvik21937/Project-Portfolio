// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Contact form simple feedback (no backend)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    this.reset();
});
