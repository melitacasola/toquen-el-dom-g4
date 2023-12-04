// Solo se ejecutará si el ancho de la pantalla es mayor que 768px
if (matchMedia('(min-width: 768px)').matches) {
    // Aquí puedes poner el código JavaScript que quieras ejecutar
    const images = document.querySelectorAll(".teacher img");
    const paragraphs = document.querySelectorAll(".teacher p");

    const generalText = document.getElementById("generalText");
    const header = document.querySelector(".hmDescriptive h1");

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
    // Añadir un evento de clic al encabezado
    header.addEventListener("click", function() {
generalText.innerHTML = generalText.dataset.original;
      // Restaurar el color y el enfoque de todas las imágenes
images.forEach(function(image) {
        image.style.setProperty("filter", "none");
        image.classList.toggle("selected");
});
    });
}