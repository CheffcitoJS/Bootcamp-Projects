// Objeto para almacenar las puntuaciones de cada canción
let ratings = {};

// Función para mostrar la información de la canción seleccionada
function mostrarInfo(titulo, portadaUrl) {
    // Obtener el contenedor de la imagen, la imagen, la descripción y la sección de puntuación
    var imagenPortada = document.getElementById("imagen-portada");
    var descripcionTema = document.getElementById("descripcion-tema");
    
    var contenedorImagen = document.getElementById("contenedor-imagen");
    var puntuacion = document.getElementById("puntuacion");

    // Asignar la URL de la portada a la imagen
    imagenPortada.src = portadaUrl;

    // Mostrar el título de la canción
    descripcionTema.textContent = titulo;

    // Mostrar el contenedor de la imagen y la sección de puntuación
    contenedorImagen.style.display = "block";
    puntuacion.style.display = "block";

    // Verificar si la canción ya tiene puntuación en ratings
    if (ratings[titulo] === undefined) {
        // Si no hay puntuación, inicializarla en 0
        ratings[titulo] = 0;
    }

    // Llamar a la función setRating con la puntuación actual
    setRating(ratings[titulo]);
}




// Función para ajustar la barra de puntuación según la calificación seleccionada
function setRating(porcentaje) {
    // Obtener el elemento de la barra de progreso
    var barraProgreso = document.getElementById("barra-progreso");

    // Cambiar el ancho de la barra de progreso según el porcentaje
    barraProgreso.style.width = porcentaje + "%";

    // Obtener el título de la canción seleccionada
    var titulo = document.getElementById("descripcion-tema").textContent;

    // Guardar la puntuación actual en el objeto ratings
    ratings[titulo] = porcentaje;
}




// Función para agregar un comentario a la lista de comentarios de un género específico
function agregarComentario(event, genero) {
    
    // 1. Prevenir que el formulario recargue la página al hacer submit
    // Esto es necesario porque, por defecto, los formularios recargan la página al enviarse,
    // pero nosotros queremos manejar el envío de los datos con JavaScript sin recargar.
    event.preventDefault();
    
    // 2. Obtener el nombre ingresado en el formulario
    // 'event.target' hace referencia al formulario que se envió.
    // 'nombre' es el nombre del campo de texto donde el usuario ingresa su nombre.
    var nombre = event.target.nombre.value;
    
    // 3. Obtener el comentario ingresado en el formulario
    // Al igual que con el nombre, 'comentario' es el nombre del campo de texto donde el usuario escribe su comentario.
    var comentario = event.target.comentario.value;
    
    // 4. Encontrar la lista de comentarios del género específico
    // El ID de la lista de comentarios se construye dinámicamente usando el género (por ejemplo, 'pop', 'rock', etc.)
    var comentariosLista = document.getElementById("comentarios-" + genero);
    
    // 5. Crear un nuevo elemento de lista (un <li>) para el comentario
    // Usamos 'document.createElement' para crear un nuevo elemento de lista que vamos a agregar a la lista de comentarios.
    var nuevoComentario = document.createElement("li");
    
    // 6. Establecer el texto del nuevo comentario
    // El texto que se va a mostrar en el nuevo comentario será el nombre del usuario y el comentario que escribió.
    // Esto se guarda en el nuevo elemento <li> que acabamos de crear.
    nuevoComentario.textContent = nombre + ": " + comentario;
    
    // 7. Agregar el nuevo comentario a la lista de comentarios
    // Usamos 'appendChild' para agregar el nuevo comentario (el elemento <li>) a la lista de comentarios.
    comentariosLista.appendChild(nuevoComentario);
    
    // 8. Limpiar los campos del formulario
    // 'event.target.reset()' vacía todos los campos del formulario para que el usuario pueda escribir un nuevo comentario si lo desea.
    event.target.reset();
}