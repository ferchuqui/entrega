document.addEventListener("DOMContentLoaded", function () {
    // Ajusta el margen superior dinámicamente según el navbar
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const mainSection = document.querySelector('.main-section');

    function adjustMainMargin() {
        const navbarHeight = navbarCollapse.classList.contains('show')
            ? navbarCollapse.offsetHeight
            : document.querySelector('.navbar').offsetHeight;
        mainSection.style.marginTop = `${navbarHeight}px`;
    }

    // Eventos para ajustar el margen cuando el menú cambia de estado
    if (navbarCollapse) {
        navbarCollapse.addEventListener('shown.bs.collapse', adjustMainMargin);
        navbarCollapse.addEventListener('hidden.bs.collapse', adjustMainMargin);
    }

    // Ajustar al cargar la página
    adjustMainMargin();

    // Festejo de Navidad
    const santaButton = document.getElementById('santaButton');
    const christmasMusic = document.getElementById('christmasMusic');
    let isPlaying = false;

    if (santaButton && christmasMusic) {
        santaButton.addEventListener('click', function () {
            if (!isPlaying) {
                christmasMusic.play(); // Reproduce la música
                santaButton.innerHTML = '<i class="bi bi-music-note-beamed"></i> 🎅 Detener Música';
                isPlaying = true;
            } else {
                christmasMusic.pause(); // Pausa la música
                santaButton.innerHTML = '<i class="bi bi-snow2"></i> 🎅 Música Navideña';
                isPlaying = false;
            }
        });
    }

    // Menu Filtro
    const filterMenu = document.querySelector(".filter");
    if (filterMenu) {
        $(".filters").on("click", function () {
            $("#menu-dish").removeClass("bydefault_show");
        });

        // Configuración de MixItUp
        $("#menu-dish").mixItUp({
            selectors: {
                target: ".dish-box-wp",
                filter: ".filter",
            },
            animation: {
                effects: "fade",
                easing: "ease-in-out",
            },
            load: {
                filter: ".all, .breakfast, .lunch, .dinner",
            },
        });
    }
});