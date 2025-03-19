document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad para abrir modales
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalBackgrounds = document.querySelectorAll('.modal-background');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.target;
            const modal = document.getElementById(target);
            modal.classList.add('is-active');

            // Si es el modal de editar, llenar con los datos de la fila
            if (target === 'modal-edit') {
                const row = button.closest('tr');
                document.getElementById('edit-nombre').value = row.cells[0].textContent;
                document.getElementById('edit-apellidos').value = row.cells[1].textContent;
                document.getElementById('edit-correo').value = row.cells[5].textContent;
                document.getElementById('edit-telefono').value = row.cells[6].textContent;
                // ... llenar los demás campos
            }

            // Si es el modal de eliminar, mostrar los datos relevantes
            if (target === 'modal-delete') {
                const row = button.closest('tr');
                document.getElementById('delete-nombre').textContent =
                    row.cells[0].textContent + ' ' + row.cells[1].textContent;
                document.getElementById('delete-cargo').textContent = row.cells[2].textContent;
                document.getElementById('delete-departamento').textContent = row.cells[4].textContent;
            }
        });
    });

    // Cerrar modales
    const closeModals = () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('is-active');
        });
    };

    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });

    modalBackgrounds.forEach(background => {
        background.addEventListener('click', closeModals);
    });
});