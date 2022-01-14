//Rocío Aragon Escamilla
// 2 DAW
window.onload = function() {
    //Variables
    var imgGrande = document.getElementById('imagen');
    var img1 = document.getElementById('imagen1');
    var img2 = document.getElementById('imagen2');
    var img3 = document.getElementById('imagen3');
    var img4 = document.getElementById('imagen4');

    //Funciones
    //Imagenes en tmaño grande
    function mostrarImagenEnGrande(evento) {
        var img = evento.srcElement;
        imgGrande.src = img.src;
    } //FinFuncion

    //Eventos para mostrar las imagenes en grande.
    img1.addEventListener('click', mostrarImagenEnGrande, false);
    img2.addEventListener('click', mostrarImagenEnGrande, false);
    img3.addEventListener('click', mostrarImagenEnGrande, false);
    img4.addEventListener('click', mostrarImagenEnGrande, false);
}