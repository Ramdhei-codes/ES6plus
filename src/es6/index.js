//Parámetros por defecto o default parameters y concatenacion

//antes de ES6
function informacion(nombre, cedula, sexo) {
    var nombre = nombre || 'Ramdhei';
    var cedula = cedula || 1112567785
    var sexo = sexo || 'M';
    console.log('Su nombre es: ' + nombre + ' su cedula: ' + cedula + ' y su sexo es: ' + sexo)
}

informacion()
informacion('Mario', 33455642, 'M')

//despues de ES6

function informacion2(nombre = 'Ramdhei', cedula = 1002566585, sexo = 'M') {
    console.log(`Su nombre es ${nombre}, su cedula es ${cedula} y su sexo es ${sexo}`)
}
informacion2()
informacion2('Susana', 133455666, 'F')
//--------------------------------------------------------------------------------------------------------

//Let y const, multilinea y spread operator

//antes de ES6
{
    var text = 'hello I am Ramdhei from Colombia \n' + 'I am 18 years old'
}

console.log(text) //Podemos acceder a ella gracias al hoisting

//despues de ES6


{
    let betterText = `Hello I am the cooler Ramdhei, I will be a web
 developer and I've got high hopes on what I can do in life and
 I am very excited to learn new things everyday`}

console.log(betterText) //no podemos acceder a ella debido a que solo funciona en su propio bloque

const bicicletas = ['GW', 'OnTrail', 'Specialized']
bicicletas = 'No hay bicicleta' // nos va a sacar un error porque const no se puede reasignar


//spread operator nos permite meter los elementos de un arreglo en otro sin necesidad de copiarlos
let marcasEconomicas = ['Renault', 'Volkswagen', 'Mazda']
let marcasCostosas = ['Lamborghini', 'Ferrari', 'Bugatti']

let marcas = ['Chevrolet', ...marcasEconomicas, ...marcasCostosas]
console.log(marcas)

//desestructuracion: nos permite crear variables en base a objetos sin necesidad de
//utilizar todos sus atributos

let infoBici = {
    marca: 'Roadmaster',
    rin: 27.5,
    talla: 'L'
}

let { marca, talla } = infoBici
console.log(marca, talla)

//Parámetros en objetos, nos permite ahorrar código cuando en un objeto 
//los atributos son variables

//antes de ES6
var name = 'Olivia'
var age = '34'
var person1 = { name: name, age: age }

//después de ES6

let name = 'Ramdhei'
let age = '18'

const person2 = { name, age } //notar que no utilizamos atributos sino las variables
console.log(person2.name)

//Arrow functions: funciones expresivas (sin nombre) dentro de variables
//cuyo bloque se señala con "=>"

//antes de ES6

var decirHola = function (nombre) {
    console.log('Hola ' + nombre)
}

//despues de ES6

const saludar = (nombre, edad) => { console.log(`Hola ${nombre}, tu edad es ${edad} años`) }
//incluso si el proceso es corto podemos obviar las llaves
const sumar = (num1, num2) => console.log(parseInt(num1) + parseInt(num2))
//Y si es un solo parámetro podemos obviar los paréntesis
const squareRoot = num => Math.sqrt(num)

//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey hey hey')
        }else{
            reject('Something is wrong')
        }
    }
    )
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.error(error))