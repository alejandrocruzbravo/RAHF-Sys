// Script para activar el menú en dispositivos pequeños
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarBasicExample');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }

    const accordionToggles = document.querySelectorAll(".accordion button");

    accordionToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;

            // Alternar la clase 'open' para activar la animación
            content.classList.toggle("open");

            // Cerrar otros acordeones
            document.querySelectorAll(".accordion-content").forEach((item) => {
                if (item !== content) {
                    item.classList.remove("open");
                }
            });
        });
    });
});
