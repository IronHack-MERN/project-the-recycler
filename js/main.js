var contenedor = document.querySelector("#container");
var ampliarLienzo = document.querySelector("#canvas");
var btnAmpliar = document.querySelector("#btnAmpliar");

function ampliar(){
	contenedor.style.width="100%";
	contenedor.style.height="100vh";
	contenedor.style.margin="0";

	ampliarLienzo.style.width = "100%";
	ampliarLienzo.style.height = "100vh";
	ampliarLienzo.style.backgroundSize = "cover";
	ampliarLienzo.style.backgroundRepeat = "no-repeat";

    /**  cambio las propiedades iniciales del botón btnAmpliar */
    // Cambio el texto del botón 
    btnAmpliar.innerHTML = "Terminar juego";
    
    // le doy una posición fija
	btnAmpliar.style.position = "fixed";
	btnAmpliar.style.top = "10px";
	btnAmpliar.style.left = "10px";
    
    // le digo que esté encima del todo
    btnAmpliar.style.zIndex = "1";

    // capturo el atributo onClick al que le damos la acción de ampliar, 
    // ya no llame a la función ampliar() sino a la función reducir()
    btnAmpliar.setAttribute("onClick","reducir()");
}

function reducir(){
    // hago que el contenedor vuelva a su posición original
    contenedor.style.width = "1000px";
	contenedor.style.height = "500px";
	contenedor.style.margin = "5vh auto";

    // que el lienzo vuelva otra vez a su posición inicial
	ampliarLienzo.style.width = "1000px";
	ampliarLienzo.style.height = "500px";

    // que el botón ampliar vuelva a tener sus posiciones iniciales
	btnAmpliar.innerHTML = "Volver a jugar";
	btnAmpliar.style.position = "relative";
	btnAmpliar.style.top = "0";
	btnAmpliar.style.left = "0";
	btnAmpliar.style.zIndex = "0";

    btnAmpliar.setAttribute("onClick","ampliar()");
}