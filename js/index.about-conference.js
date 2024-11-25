window.toggleAccordion = function(event) {
    const icon = event.target;
    const faqItem = icon.closest('.faq__item');
    const content = faqItem.nextElementSibling;

    icon.classList.toggle('open');
    content.classList.toggle('open');

    icon.textContent = icon.textContent === '+' ? '-' : '+';
}
function addAccordionEvents() {
    const icons = document.querySelector('.faq__icon');
    icons.forEach(icon => {
        icon.onclick = toggleAccordion;
    });
}
document.addEventListener('DOMContentLoaded', addAccordionEvents);