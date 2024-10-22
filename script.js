function buscarPelicula() {
    let input = document.getElementById('buscar').value.toLowerCase();
    let peliculas = document.getElementsByClassName('pelicula');

    for (let i = 0; i < peliculas.length; i++) {
        let titulo = peliculas[i].getElementsByTagName('p')[0].textContent.toLowerCase();
        if (titulo.includes(input)) {
            peliculas[i].style.display = '';
        } else {
            peliculas[i].style.display = 'none';
        }
    }
}

function filtrarCategoria() {
    let categoriaSeleccionada = document.getElementById('categorias').value;
    let peliculas = document.getElementsByClassName('pelicula');

    for (let i = 0; i < peliculas.length; i++) {
        let categoria = peliculas[i].getAttribute('data-categoria');
        if (categoriaSeleccionada === 'todos' || categoria === categoriaSeleccionada) {
            peliculas[i].style.display = '';
        } else {
            peliculas[i].style.display = 'none';
        }
    }
}
