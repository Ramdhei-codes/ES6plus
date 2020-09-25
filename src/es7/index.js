//array.includes(element, index): verificar existencia de elementos en arrays

const cristales = ['fluorita', 'cuarzo rosa', 'selenita', 'jaspe', 'cornalina']

function buscarCristal(lista, nombre, indice){
    if(lista.includes(nombre, indice)){
        //verificamos con el método includes(elemento, indice) si el elemento está en el array desde el número index
        console.log('Si se encuentra')
    } else{
        console.log('No se encuentra')
    }
}

buscarCristal(cristales,'selenita',3)

//operador de potencia: **

let base = 3
let exponente = 2
let potencia = base ** exponente
console.log(potencia)