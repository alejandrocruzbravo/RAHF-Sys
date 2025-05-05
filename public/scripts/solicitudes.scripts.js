
    document.addEventListener('DOMContentLoaded', function() {
        const filtroBtns = document.querySelectorAll('.filtro-btn');
        
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filtroBtns.forEach(b => b.classList.remove('active'));
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                // Aquí iría la lógica para filtrar las solicitudes
                const filtro = this.dataset.filtro;
                // Implementar lógica de filtrado según sea necesario
            });
        });

        // Aquí iría la lógica para manejar los botone de aceptar/rechazar
        const solicitudes = document.querySelectorAll('.solicitud-card');
        solicitudes.forEach(solicitud => {
            const btnAceptar = solicitud.querySelector('.btn-aceptar');
            const btnRechazar = solicitud.querySelector('.btn-rechazar');

            btnAceptar.addEventListener('click', function() {
                // Lógica para aceptar la solicitud
                console.log('Solicitud aceptada');
            });

            btnRechazar.addEventListener('click', function() {
                // Lógica para rechazar la solicitud
                console.log('Solicitud rechazada');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Elementos del modal
        const modal = document.getElementById('modalDetalles');
        const btnCerrar = modal.querySelector('.delete');
        const btnsDetalles = document.querySelectorAll('.button.is-dark.ml-2'); // Solo los botones de detalles
    
        // Función para abrir el modal
        function abrirModal() {
            modal.classList.add('is-active');
            document.body.classList.add('is-clipped');
        }
    
        // Función para cerrar el modal
        function cerrarModal() {
            modal.classList.remove('is-active');
            document.body.classList.remove('is-clipped');
        }
    
        // Event listeners para los botones de detalles
        btnsDetalles.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                abrirModal();
            });
        });
    
        // Event listener para el botón de cerrar
        btnCerrar.addEventListener('click', cerrarModal);
    
        // Cerrar modal al hacer clic en el fondo
        modal.querySelector('.modal-background').addEventListener('click', cerrarModal);
    
        // Cerrar modal con la tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                cerrarModal();
            }
        });
    
        // Lógica de filtrado
        const filtroBtns = document.querySelectorAll('.button.is-dark[data-filtro]');
        
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filtroBtns.forEach(b => b.classList.remove('is-primary'));
                // Agregar clase active al botón clickeado
                this.classList.add('is-primary');
                
                const filtro = this.dataset.filtro;
                // Implementar lógica de filtrado según sea necesario
            });
        });
    
        // Lógica para los botones de aceptar/rechazar
        const solicitudes = document.querySelectorAll('.box.has-background-black-ter');
        solicitudes.forEach(solicitud => {
            const btnAceptar = solicitud.querySelector('.button.is-success');
            const btnRechazar = solicitud.querySelector('.button.is-danger');
    
            btnAceptar.addEventListener('click', function() {
                // Lógica para aceptar la solicitud
                console.log('Solicitud aceptada');
            });
    
            btnRechazar.addEventListener('click', function() {
                // Lógica para rechazar la solicitud
                console.log('Solicitud rechazada');
            });
        });
    }); 