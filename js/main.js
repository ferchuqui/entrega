document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const mainSection = document.querySelector('.main-section');

    function adjustMainMargin() {
        if (navbarCollapse.classList.contains('show')) {
            // Si el menú está desplegado, ajusta el margen
            const navbarHeight = navbarCollapse.offsetHeight;
            mainSection.style.marginTop = `${navbarHeight}px`;
        } else {
            // Si el menú está colapsado, ajusta al tamaño del navbar
            mainSection.style.marginTop = '56px'; // Altura estándar del navbar
        }
    }

    // Ajustar el margen cuando el menú cambia de estado
    navbarCollapse.addEventListener('shown.bs.collapse', adjustMainMargin);
    navbarCollapse.addEventListener('hidden.bs.collapse', adjustMainMargin);

    // Ajustar al cargar la página
    adjustMainMargin();
});