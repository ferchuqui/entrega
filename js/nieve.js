
document.addEventListener("DOMContentLoaded", function () {
    // Crear el contenedor para los copos de nieve
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    // Función para generar un copo de nieve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración de 2 a 5 segundos
        snowflake.style.opacity = Math.random(); // Opacidad aleatoria
        snowflake.textContent = '❄'; // Puedes cambiar el copo a otro carácter o símbolo
        snowContainer.appendChild(snowflake);

        // Eliminar el copo tras caer
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Crear un nuevo copo cada 200ms
    setInterval(createSnowflake, 200);
});
