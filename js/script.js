document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordioncontent = header.nextElementSibling;
        const isOpen = header.classList.contains('active');
        document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(content => (content.style.display = 'none'));

        if (!isOpen) {
            header.classList.add('active');
            accordionContent.style.display = 'block';
        }
    });
});