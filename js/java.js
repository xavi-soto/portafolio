// Función para cambiar la imagen al pasar el mouse y aplicar la animación de crecimiento
function addHoverEffectWithGrow(imageId, originalSrc, hoverSrc) {
    const imageElement = document.getElementById(imageId);

    // Cambia a la imagen 'a' cuando el mouse está sobre la imagen
    imageElement.addEventListener('mouseover', () => {
        imageElement.src = hoverSrc;
    });

    // Regresa a la imagen original cuando el mouse sale de la imagen
    imageElement.addEventListener('mouseout', () => {
        imageElement.src = originalSrc;
    });
}

// Aplica el efecto hover con crecimiento a la imagen 1
addHoverEffectWithGrow('img1', 'http://imgfz.com/i/kz563Hv.png', 'http://imgfz.com/i/70SieX8.png');

// Aplica el efecto hover normal a las demás imágenes
addHoverEffectWithGrow('img2', 'http://imgfz.com/i/MQ8OEwG.png', 'http://imgfz.com/i/Ipd0C1S.png');
addHoverEffectWithGrow('img9', 'http://imgfz.com/i/KQzfB1o.png', 'http://imgfz.com/i/Rgovu0O.png');
addHoverEffectWithGrow('img3', 'http://imgfz.com/i/ON3lLde.png', 'http://imgfz.com/i/IJlsQOK.png');
addHoverEffectWithGrow('img4', 'http://imgfz.com/i/1uHNTfw.png', 'http://imgfz.com/i/RdhT1EN.png');
addHoverEffectWithGrow('img5', 'http://imgfz.com/i/aUuQn8h.png', 'http://imgfz.com/i/XgTU025.png');
addHoverEffectWithGrow('img6', 'http://imgfz.com/i/yq8aJ4j.png', 'http://imgfz.com/i/TvOKVig.png');
addHoverEffectWithGrow('img7', 'http://imgfz.com/i/t0W42bN.png', 'http://imgfz.com/i/1pqMB3U.png');
addHoverEffectWithGrow('img8', 'http://imgfz.com/i/EzP0LJt.png', 'http://imgfz.com/i/z3P1Okb.png');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las imágenes por su ID
    var imagenes = document.querySelectorAll('.column img');

    // Objeto para almacenar los pares de ID de imagen y su imagen original
    var imagenesOriginales = {};

    // Función para cambiar la imagen al pasar el cursor sobre ella
    function cambiarImagen(event) {
        // Obtener el ID de la imagen actual
        var id = event.target.id;

        // Definir el nuevo src de la imagen basado en el ID
        var nuevoSrc;
        switch (id) {
            case 'imagen1':
                nuevoSrc = 'https://example.com/assets/a.jpg';
                break;
            case 'imagen2':
                nuevoSrc = 'https://example.com/assets/b.jpg';
                break;
            case 'imagen3':
                nuevoSrc = 'https://example.com/assets/c.jpg';
                break;
            case 'imagen4':
                nuevoSrc = 'https://example.com/assets/d.jpg';
                break;
            case 'imagen5':
                nuevoSrc = 'https://example.com/assets/e.jpg';
                break;
            case 'imagen6':
                nuevoSrc = 'https://example.com/assets/f.jpg';
                break;
            case 'imagen7':
                nuevoSrc = 'https://example.com/assets/g.jpg';
                break;
            case 'imagen8':
                nuevoSrc = 'https://example.com/assets/h.jpg';
                break;
            case 'imagen9':
                nuevoSrc = 'https://example.com/assets/i.jpg';
                break;
            case 'imagen10':
                nuevoSrc = 'https://example.com/assets/j.jpg';
                break;
            case 'imagen11':
                nuevoSrc = 'https://example.com/assets/k.jpg';
                break;
            case 'imagen12':
                nuevoSrc = 'https://example.com/assets/l.jpg';
                break;
            default:
                nuevoSrc = '';
        }

        // Guardar la imagen original si aún no se ha guardado
        if (!imagenesOriginales[id]) {
            imagenesOriginales[id] = event.target.src;
        }

        // Cambiar el src de la imagen actual
        event.target.src = nuevoSrc;
    }

    // Función para restaurar la imagen original al quitar el cursor de la imagen
    function restaurarImagen(event) {
        // Obtener el ID de la imagen actual
        var id = event.target.id;

        // Restaurar la imagen original
        event.target.src = imagenesOriginales[id];
    }

    // Asignar los eventos mouseover y mouseout a todas las imágenes
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('mouseover', cambiarImagen);
        imagen.addEventListener('mouseout', restaurarImagen);
    });
});

console.log("JavaScript cargado correctamente");

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
