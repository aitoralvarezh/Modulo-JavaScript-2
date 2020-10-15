'use strict';

/* 
######################################################
##  M·É·T·O·D·O·S  D·E·L  O·B·J·E·T·O  W·I·N·D·O·W  ##
######################################################
 */

// console.log('¡hola mundo!');
// window.alert ('hola');
// confirm('si si o si no');
// prompt('una pregunta');



/* 
#################
## PROPIEDADES ##
#################
*/

let altura,
    anchura
altura = window.innerHeight
anchura = innerWidth

console.log(altura, anchura);

//LOCATION

let ubicacion = window.location

//esto devuelve cosas como el protocolo
//por ejemplo el protocolo https:// (ej:pagos en línea)
ubicacion = location.search
//si la ubicación tiene un query podremos acceder a  ella '?s=busqueda'

console.log(ubicacion);

//podemos redireccionar cambiando el valor de href

// window.location.href='https://google.es'

//HISTORY

console.log(history);
//window.history.back
//window.history.go(-2)

//NAVIGATOR

let navegador = window.navigator

navegador = navegador.appName //devuelve Netscape siempre que no sea explorer
navegador = navigator.userAgent
navegador = navigator.language

console.log(navegador);