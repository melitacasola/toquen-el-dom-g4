if (matchMedia('(min-width: 768px)').matches) {

    const images = document.querySelectorAll(".teacher img");
    const paragraphs = document.querySelectorAll(".teacher p");

    const generalText = document.getElementById("generalText");
    const header = document.querySelector(".aboutDescriptive h1");

    generalText.dataset.original = generalText.innerHTML;

    images.forEach(function(image) {
    image.addEventListener("click", function() {
        paragraphs.forEach(function(paragraph) {
    paragraph.style.display = "none";
        });
        // Aplicar un efecto de escala de grises y desenfoque a todas las imágenes
        images.forEach(function(image) {
    image.style.setProperty("filter", "grayscale(1) blur(2px)");
        });
        const paragraph = image.nextElementSibling;
        generalText.innerHTML = paragraph.innerHTML;
        image.style.setProperty("filter", "none");
        image.classList.toggle("selected");
});
    });
    // Añadir un evento de clic al documento
    document.addEventListener("click", function(event) {
        // Comprobar si el elemento clicado es una imagen o no
        if (!event.target.matches(".teacher img")) {
            // Restaurar el texto principal y las fotos al estado original
            generalText.innerHTML = generalText.dataset.original;
            images.forEach(function(image) {
                image.style.setProperty("filter", "none");
                image.classList.toggle("selected");
            });
        }
    });
}