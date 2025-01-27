let ejemplo = 1;
let numeroSecreto = 0; /* la variable numero secreto es de alcance global, queire decir, que puede ser utilizada dentro
de OTRAS funciones...sin embargo, la variable dentro de la funcion tiene alcance de BLOQUE, SOLO ES INTERNA...ESTO SOLO ES UN EJEMPLO DESPUES
SE CORREGIRA */
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/*let titulo = document.querySelector('h1');
titulo.innerHTML = `Juego del numero secreto ${ejemplo}`;*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = `Indica un numero del 1 al 10`;*/

function asignarTextoElemento(elemento, texto)  {                          //esta funcion nos evita que repitamos el document.query
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   //primeras dos lineas del codigo copiadas
    return;     // leo sugiere siempre poner el return al final de una funcion, pero no es 100% necesario
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){  //el usuario acerto
        asignarTextoElemento('p' , `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { //el usuario no acerto
    
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;    
}

function limpiarCaja(){  //funcion que limpia la wea de numeros
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    return;

}; 
   


function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); //hay que tener ojo, porque si la lista se llena, la wea despue se queda trabada
    //Si el nmero generado esta incluida en la listaNumerosSorteados hacemos algo, si no, hacemos otra

    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }  else {
            //si ya sorteamos todos los numeros 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales(){
    asignarTextoElemento('h1',`Juego del numero secreto ${ejemplo}!`); //llamando la funcion, haciendo que funcione como variable...en java script tiene que ser en un bloque, fuera de las llaves se puede usar en html tambien, pero solo en eventos
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();  
    numeroIntentos = 1;
    console.log(numeroSecreto);
    
    
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();  //esta funcion la teniamos desde antes  
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // el (#reiniciar), se escribia asi porque buscaba por id, y el setAttribute se                                                                               escrbia asi por que antes solo eliminabamos un parametro entero, ahora agregamos                                                                           uno y con cierto valor!
}

condicionesIniciales();
 


/* RECUERDA, f12 para ver las herramienteas para desarrolladores */

