const SiBtn = document.getElementById('BotonSi');
const NoBtn = document.getElementById('BotonNo');
const Texto = document.getElementById('Texto-Cambiar');


let fontSize = 16;

NoBtn.addEventListener('click', () => {
    document.getElementById('OtraImagen').style.visibility = "visible"; // Mostrar la otra imagen
    document.getElementById('ImagenOriginal').style.visibility = "hidden"; // Ocultar la imagen original

    fontSize += 10; // Aumentar el tamaño de la fuente
    SiBtn.style.fontSize = `${fontSize}px`;

    // Cambiar el texto del botón "No"
    const Textos = ["¿Segura?", "Por favor", "Andale porfis", "¡No digas que no!", "Di que sí"];
    const random = Math.floor(Math.random() * Textos.length);
    Texto.textContent = Textos[random];

    // Hacer que el botón "No" se haga más pequeño
    const scale = 1 - (fontSize / 100);
    NoBtn.style.transform = `scale(${scale})`;

    // Ocultar el botón "No" si el tamaño de fuente es mayor a 100
    if (fontSize > 100) {
        NoBtn.style.display = 'none';

        // Expandir el botón "Sí" para cubrir toda la pantalla
        SiBtn.style.position = 'fixed';
        SiBtn.style.top = '0';
        SiBtn.style.left = '0';
        SiBtn.style.width = '100%';
        SiBtn.style.height = '100%';
        SiBtn.style.borderRadius = '0';
        SiBtn.style.margin = '0';
        SiBtn.style.display = 'flex';
        SiBtn.style.justifyContent = 'center';
        SiBtn.style.alignItems = 'center';
        SiBtn.style.fontSize = '40px';
        SiBtn.style.zIndex = '1000';
    }
});

SiBtn.addEventListener('click', () => {
    // Redireccionar a respuesta.html
    window.location.href = 'respuesta.html';
});