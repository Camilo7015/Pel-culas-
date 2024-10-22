
    // Cargar el archivo JSON
    fetch('imagenes.json')
        .then(response => response.json())
        .then(data => {
            // Seleccionar el contenedor de la galería
            const galeria = document.querySelector('.galeria-container');

            // Recorrer todas las imágenes del JSON
            data.imagenes.forEach(imagen => {
                // Crear un contenedor para cada imagen
                const figure = document.createElement('figure');
                figure.classList.add('imagen-item');  // Añadir clase CSS para control del estilo

                // Crear la imagen
                const imgElement = document.createElement('img');
                imgElement.src = imagen.ruta;  // Ruta de la imagen desde el JSON
                imgElement.alt = imagen.nombre;  // Nombre de la imagen como texto alternativo

                // Crear un pie de foto (opcional)
                const caption = document.createElement('figcaption');
                caption.textContent = imagen.nombre;  // Añadir el nombre de la imagen como pie de foto

                // Añadir la imagen y el pie de foto al contenedor
                figure.appendChild(imgElement);
                figure.appendChild(caption);

                // Añadir la figura completa al contenedor de la galería
                galeria.appendChild(figure);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

