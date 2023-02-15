// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        this.document.addEventListener("mousemove", parallax);

        function parallax(event) {
            this.querySelectorAll(".layer").forEach(layer => {
                let speedLayer = layer.getAttribute('data-speed');

                layer.style.transform = `translateX(${event.clientX * speedLayer / 2000}px) translateY(${event.clientY * speedLayer / 2000}px)`;
            });

        };
        
     });
});