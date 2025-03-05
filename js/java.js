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
addHoverEffectWithGrow('img1', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958022/1_xnbipu.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308513/70SieX8_ba0q66.png');

// Aplica el efecto hover normal a las demás imágenes
addHoverEffectWithGrow('img2', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958854/2_aznhqn.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308541/Ipd0C1S_wkr6po.png');
addHoverEffectWithGrow('img9', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958854/9_eaecvz.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308565/Rgovu0O_ggzcz7.png');
addHoverEffectWithGrow('img3', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958854/3_icwrps.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308606/IJlsQOK_jeotqx.png');
addHoverEffectWithGrow('img4', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958854/4_rmfllq.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308624/RdhT1EN_ww619t.png');
addHoverEffectWithGrow('img5', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958855/5_iyte7y.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308642/XgTU025_q9upk3.png');
addHoverEffectWithGrow('img6', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739959746/3d-01_qn7xh8.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308661/TvOKVig_vtmqtf.png');
addHoverEffectWithGrow('img7', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958855/7_nei2fq.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308705/1pqMB3U_xtxfls.png');
addHoverEffectWithGrow('img8', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1739958855/8_bppcew.png', 'https://res.cloudinary.com/dbwezmju6/image/upload/v1740308727/z3P1Okb_yrf8hp.png');

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
