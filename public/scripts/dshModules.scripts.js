document.addEventListener("DOMContentLoaded", () => {
    // Abrir el modal correcto
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-target");
            document.getElementById(modalId).classList.add("is-active");
        });
    });

    // Cerrar cualquier modal al hacer clic en el fondo o botón de cierre
    document.querySelectorAll(".modal").forEach(modal => {
        modal.querySelectorAll(".close-modal, .modal-background").forEach(element => {
            element.addEventListener("click", () => {
                modal.classList.remove("is-active");
            });
        });
    });

    document.querySelectorAll(".load-view").forEach(button => {
        button.addEventListener("click", async () => {
            const viewName = button.getAttribute("data-view"); // Obtiene la vista a cargar
            const dynamicContent = document.getElementById("dynamic-content");

            try {
                const response = await fetch(`/dashboard/${viewName}`);
                const html = await response.text();
                dynamicContent.innerHTML = html; // Inyecta el nuevo contenido
            } catch (error) {
                console.error("Error al cargar la vista:", error);
                dynamicContent.innerHTML = "<p>Error al cargar la vista</p>";
            }
        });
    });
});
