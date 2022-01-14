//Rocío Aragon Escamilla
// 2 DAW
window.onload = function() {
    // Variables
    const IMAGENES = [
        'img/hp.jpeg',
        'img/starwars.jpg',
        'img/sts.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    var posicionActual = 0;
    var imagen = document.getElementById('imagenCarrousel');
    var intervalo;

    //Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        } //FinSi
        renderizarImagen();
    } //FinFuncion

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicion actual
     */
    function renderizarImagen() {
        imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    } //FinFuncion

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    } //FinFuncion

    renderizarImagen();
    playIntervalo();
}