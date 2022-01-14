//Rocío Aragon Escamilla
// 2 DAW
window.onload = function() {
    //Entorno
    var primerTurno = true;
    var eJuegoInfo = document.getElementById("juego-info");
    var arrayCuadros = document.getElementsByClassName("cuadro");
    var btnJugar = document.getElementById("btnJugar");
    var contador = 0;
    var j1 = "Jugador 1";
    var j2 = "Jugador 2";
    var bEnviar = document.getElementById("enviar");
    var bBorrar = document.getElementById("borrar");
    var eClasico = document.getElementById("enlaceClasico");
    var eHP = document.getElementById("enlaceHP");
    var eDerbi = document.getElementById("enlaceDerbi");
    var eSW = document.getElementById("enlaceSW");
    var imgJugador1 = "url(\"img/O.jpg\")";
    var imgJugador2 = "url(\"img/X.jpg\")";
    var contPuntosJ1 = 0;
    var contPuntosJ2 = 0;
    var ePuntosJ1 = document.getElementById("puntosJ1");
    var ePuntosJ2 = document.getElementById("puntosJ2");
    var eRanking = document.getElementById("ranking");
    var arrayRanking = new Array();

    //Funciones

    //OBJETO JUGADOR
    function JugadorRanking(nombre, victorias) {
        //Atributos:
        this.nombre = nombre;
        this.victorias = victorias;
        //Métodos:
        this.imprimeJugador = imprimeJugador;
    } //FinClase

    function desactivarBtnJugar() {
        btnJugar.className = "btnJugarDesactivado"; //Se le pone la clase con los estilos para el boton desactivado
        btnJugar.onclick = "none"; //se desactiva el click para que no se pueda usar el boton
    } //FinFuncion

    function recogerNombres() {
        //Tomamos los valore del form, si no los valores serán jugador 1 y 2.
        var nombreJug1 = document.getElementById("j1").value;
        if (nombreJug1 != "" && nombreJug1 != null) {
            j1 = nombreJug1;
        }
        var nombreJug2 = document.getElementById("j2").value;
        if (nombreJug2 != "" && nombreJug2 != null) {
            j2 = nombreJug2;
        }
        eJuegoInfo.innerHTML = "Turno " + j1;
    } //FinFucnion

    function borrarNombres() {
        document.getElementById("j1").value = "";
        document.getElementById("j2").value = "";
        j1 = "Jugador 1";
        j2 = "Jugador 2";
        eJuegoInfo.innerHTML = "Turno " + j1;
    } //FinFucnion

    function asignar() {
        if (primerTurno) {
            this.style.backgroundImage = imgJugador1;
            eJuegoInfo.innerHTML = "Turno " + j2; //Se le pasa el turno al siguiente jugador
        } else {
            this.style.backgroundImage = imgJugador2;
            eJuegoInfo.innerHTML = "Turno " + j1; //Se le pasa el turno al siguiente jugador
        } //FinSi

        this.onclick = "none"; //Se desactiva el clic en ese cuadro para no volver a poner otra imagen.
        primerTurno = !primerTurno; //Se cambia el estado del interruptor del turno
        contador++;
        if (contador >= 5) {
            comprobar();
        } //FinSi
    } //FinFuncion

    function volverAJugar() {
        for (var i = 0; i < arrayCuadros.length; i++) { //Se cogen todos los cuadros con la clase "cuadro"
            arrayCuadros[i].style.backgroundImage = "";
            arrayCuadros[i].onclick = asignar; //se le pone el click para que el cuadro pueda ser pulsado de nuevo.
        } //FinPara
        contador = 0;
    } //FinFuncion

    function activarBtnJugar() {
        btnJugar.className = "btnJugar"; //Se le pone la clase con los estilos para el boton activado
        btnJugar.onclick = function() {
                eJuegoInfo.innerHTML = "Turno " + j1; //Se establece el turno 1
                primerTurno = true;
                volverAJugar();
                desactivarBtnJugar();
            } //FinFuncion
    }

    function desactivarCuadros() {
        for (var i = 0; i < arrayCuadros.length; i++) {
            arrayCuadros[i].onclick = "none";
        } //FinPara
    } //FinFuncion

    //Comprobación de juegos
    function comprobar() {
        if ((arrayCuadros[0].style.backgroundImage == imgJugador1 && arrayCuadros[1].style.backgroundImage == imgJugador1 && arrayCuadros[2].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[3].style.backgroundImage == imgJugador1 && arrayCuadros[4].style.backgroundImage == imgJugador1 && arrayCuadros[5].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[6].style.backgroundImage == imgJugador1 && arrayCuadros[7].style.backgroundImage == imgJugador1 && arrayCuadros[8].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[0].style.backgroundImage == imgJugador1 && arrayCuadros[3].style.backgroundImage == imgJugador1 && arrayCuadros[6].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[1].style.backgroundImage == imgJugador1 && arrayCuadros[4].style.backgroundImage == imgJugador1 && arrayCuadros[7].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[2].style.backgroundImage == imgJugador1 && arrayCuadros[5].style.backgroundImage == imgJugador1 && arrayCuadros[8].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[0].style.backgroundImage == imgJugador1 && arrayCuadros[4].style.backgroundImage == imgJugador1 && arrayCuadros[8].style.backgroundImage == imgJugador1) ||
            (arrayCuadros[6].style.backgroundImage == imgJugador1 && arrayCuadros[4].style.backgroundImage == imgJugador1 && arrayCuadros[2].style.backgroundImage == imgJugador1)) {
            eJuegoInfo.innerHTML = "¡¡Gana " + j1 + " !!";
            contPuntosJ1++;
            ePuntosJ1.innerHTML = contPuntosJ1;
            desactivarCuadros();
            activarBtnJugar();
            actualizarRanking(j1);
        } else {
            if ((arrayCuadros[0].style.backgroundImage == imgJugador2 && arrayCuadros[1].style.backgroundImage == imgJugador2 && arrayCuadros[2].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[3].style.backgroundImage == imgJugador2 && arrayCuadros[4].style.backgroundImage == imgJugador2 && arrayCuadros[5].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[6].style.backgroundImage == imgJugador2 && arrayCuadros[7].style.backgroundImage == imgJugador2 && arrayCuadros[8].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[0].style.backgroundImage == imgJugador2 && arrayCuadros[3].style.backgroundImage == imgJugador2 && arrayCuadros[6].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[1].style.backgroundImage == imgJugador2 && arrayCuadros[4].style.backgroundImage == imgJugador2 && arrayCuadros[7].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[2].style.backgroundImage == imgJugador2 && arrayCuadros[5].style.backgroundImage == imgJugador2 && arrayCuadros[8].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[0].style.backgroundImage == imgJugador2 && arrayCuadros[4].style.backgroundImage == imgJugador2 && arrayCuadros[8].style.backgroundImage == imgJugador2) ||
                (arrayCuadros[6].style.backgroundImage == imgJugador2 && arrayCuadros[4].style.backgroundImage == imgJugador2 && arrayCuadros[2].style.backgroundImage == imgJugador2)) {
                eJuegoInfo.innerHTML = "¡¡Gana " + j2 + " !!";
                contPuntosJ2++;
                ePuntosJ2.innerHTML = contPuntosJ2;
                desactivarCuadros();
                activarBtnJugar();
                actualizarRanking(j2);
            } else {
                if (contador >= 9) {
                    eJuegoInfo.innerHTML = "¡¡Empate!!";
                    activarBtnJugar();
                    desactivarCuadros();
                } //FinSi
            } //FinSi
        } //FinSi
    } //FinFuncion

    //Cambio de imagen segun tematica elegida.
    function cambiarImagen(evento) {
        var origenId = evento.srcElement.id;
        switch (origenId) {
            case "enlaceClasico":
                imgJugador1 = "url(\"img/O.jpg\")";
                imgJugador2 = "url(\"img/X.jpg\")";
                break;
            case "enlaceHP":
                imgJugador1 = "url(\"img/hp.jpg\")";
                imgJugador2 = "url(\"img/voldemort.jpg\")";
                break;
            case "enlaceDerbi":
                imgJugador1 = "url(\"img/betis.jpg\")";
                imgJugador2 = "url(\"img/sevilla.png\")";
                break;
            case "enlaceSW":
                imgJugador1 = "url(\"img/yoda.png\")";
                imgJugador2 = "url(\"img/vader.png\")";
                break;
            default:
                imgJugador1 = "url(\"img/O.jpg\")";
                imgJugador2 = "url(\"img/X.jpg\")";
        } //FinSegunSea

        volverAJugar();
        desactivarBtnJugar();
    } //FinFuncion

    function compararRanking(a, b) {
        return b.victorias - a.victorias;
    } //FinFuncion

    function actualizarRanking(jugador) {
        //Entonro:
        var i = 0;
        var encontrado = false;
        var jugRank;
        //Algoritmo:
        while (i < arrayRanking.length && !encontrado) {
            jugRank = arrayRanking[i];
            encontrado = jugRank.nombre == jugador;
            i++;
        } //FinPara

        if (encontrado) {
            jugRank.victorias++;
        } else {
            var nuevoJugRank = new JugadorRanking(jugador, 1);
            arrayRanking.push(nuevoJugRank);
        } //FinSi

        arrayRanking.sort(compararRanking);

        var cadenaHTML = "<th>Posicion</th><th>Jugador</th><th>Victorias</th>";
        for (var i = 0; i < arrayRanking.length; i++) {
            cadenaHTML = cadenaHTML + arrayRanking[i].imprimeJugador(i + 1);
            eRanking.innerHTML = cadenaHTML;
        } //FinPara

    } //FinFuncion

    function imprimeJugador(posicion) {
        var cadenaHTML = "";

        cadenaHTML = cadenaHTML + "<tr><td>" + posicion + "</td>";
        cadenaHTML = cadenaHTML + "<td>" + this.nombre + "</td>";
        cadenaHTML = cadenaHTML + "<td>" + this.victorias + "</td></tr>";

        return cadenaHTML;
    } //FinFuncion


    //Algoritmo
    eRanking.innerHTML = "<th>Posicion</th><th>Jugador</th><th>Victorias</th>";

    bEnviar.addEventListener('click', recogerNombres); //Evento que recoge los nombres de los jugadores.
    bBorrar.addEventListener('click', borrarNombres); //Evento que borra los nombres de los jugadores.
    eClasico.addEventListener('click', cambiarImagen); //Evento que cambia la imagen de la tematica del juego
    eHP.addEventListener('click', cambiarImagen); //Evento que cambia la imagen de la tematica del juego
    eDerbi.addEventListener('click', cambiarImagen); //Evento que cambia la imagen de la tematica del juego
    eSW.addEventListener('click', cambiarImagen); //Evento que cambia la imagen de la tematica del juego

    desactivarBtnJugar();
    eJuegoInfo.innerHTML = "Turno " + j1;
    ePuntosJ1.innerHTML = contPuntosJ1;
    ePuntosJ2.innerHTML = contPuntosJ2;

    for (var i = 0; i < arrayCuadros.length; i++) {
        arrayCuadros[i].onclick = asignar;
    } //FinPara


}