const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const sectionsLeft = document.querySelectorAll('.transition-left');
sectionsLeft.forEach((el) => observer.observe(el));

const sectionsRight = document.querySelectorAll('.transition-right');
sectionsRight.forEach((el) => observer.observe(el));

// const sections = document.querySelectorAll('.transition-left');
// sectionsLeft.forEach((el) => observer.observe(el));