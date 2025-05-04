document.addEventListener("DOMContentLoaded", () => {
    // Abrir el modal correcto
    const openModalButtons = document.querySelectorAll(".open-modal");
    if (openModalButtons.length > 0) {
        openModalButtons.forEach(button => {
            button.addEventListener("click", () => {
                const modalId = button.getAttribute("data-target");
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add("is-active");
                }
            });
        });
    }

    // Cerrar cualquier modal al hacer clic en el fondo o botón de cierre
    const modals = document.querySelectorAll(".modal");
    if (modals.length > 0) {
        modals.forEach(modal => {
            const closeElements = modal.querySelectorAll(".close-modal, .modal-background");
            if (closeElements.length > 0) {
                closeElements.forEach(element => {
                    element.addEventListener("click", () => {
                        modal.classList.remove("is-active");
                    });
                });
            }
        });
    }

    // Intercala componentes en el dashboard
    const loadViewButtons = document.querySelectorAll(".load-view");
    if (loadViewButtons.length > 0) {
        loadViewButtons.forEach(button => {
            button.addEventListener("click", async () => {
                const viewName = button.getAttribute("data-view");
                const dynamicContent = document.getElementById("dynamic-content");
                
                if (dynamicContent) {
                    try {
                        const response = await fetch(`/dashboard/${viewName}`);
                        const html = await response.text();
                        dynamicContent.innerHTML = html;
                    } catch (error) {
                        console.error("Error al cargar la vista:", error);
                        dynamicContent.innerHTML = "<p>Error al cargar la vista</p>";
                    }
                }
            });
        });
    }

    const accordionToggles = document.querySelectorAll(".accordion button");
    if (accordionToggles.length > 0) {
        accordionToggles.forEach((toggle) => {
            toggle.addEventListener("click", () => {
                const content = toggle.nextElementSibling;
                if (content) {
                    content.classList.toggle("open");

                    document.querySelectorAll(".accordion-content").forEach((item) => {
                        if (item !== content) {
                            item.classList.remove("open");
                        }
                    });
                }
            });
        });
    }
});
