document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => section.style.display = 'none'); // Hide all sections initially

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            sections.forEach(section => section.style.display = 'none'); // Hide all sections
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = 'block';
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Display the first section by default
    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }
});
