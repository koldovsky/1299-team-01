function toggleAccordion(event) {
    const button = event.target;
    const container = button.closest('.faq__container');
    if (!container) return;

    const content = container.querySelector('.faq__content');
    if (!content) return;

    const isOpen = content.classList.contains('open');
    content.classList.toggle('open', !isOpen);
    button.textContent = isOpen ? '+' : '-';
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('faq__icon')) {
            toggleAccordion(event);
        }
    });
});
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('faq__icon')) {
        console.log('FAQ іконка натиснута:', event.target);
        toggleAccordion(event);
    }
});