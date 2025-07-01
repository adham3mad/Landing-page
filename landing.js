window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        const R = document.querySelectorAll(".old-r");

        R.forEach(function (el) {
            el.classList.remove("old-r");
            el.classList.add("pjr");
        });
        const l = document.querySelectorAll(".old-l");

        l.forEach(function (el) {
            el.classList.remove("old-l");
            el.classList.add("pjl");
        });
    }
    const pjr = document.querySelectorAll('.pjr');
    applyClassOnView(pjr, 'visable');
    const pjl = document.querySelectorAll('.pjl');
    applyClassOnView(pjl, 'visable');
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("intern-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your request has been sent successfully!");
        this.reset();
    });
});


function applyClassOnView(selector, className) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, {
        threshold: 0.2
    });

    selector.forEach(el => observer.observe(el));
}


const sections = document.querySelectorAll('.an');
applyClassOnView(sections, 'visable');
