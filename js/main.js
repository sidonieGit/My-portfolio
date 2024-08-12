document.addEventListener('DOMContentLoaded', function () {
    const sectionTitles = document.querySelectorAll('.section-title');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        let currentSection = '';

        // Management of title animations
        sectionTitles.forEach(title => {
            const rect = title.getBoundingClientRect();

            if (rect.top <= window.innerHeight - 100 && rect.bottom >= 100) {
                title.classList.add('active');
            } else {
                title.classList.remove('active');
            }
        });

        // Management of navigation link updates
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check if certain elements are already in view.
    handleScroll();
});
