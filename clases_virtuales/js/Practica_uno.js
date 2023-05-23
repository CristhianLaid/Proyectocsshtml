// cadena de texto
let nombre = 'Daniel'; 

// numero
let numero=4, numero2 =-1.2;

// boolean
let usuaioConectado = false;
let mayorQue = 10>2;
console.log(mayorQue)

if(typeof(nombre) == 'string'){
    console.log("Esto es una cadena")
}

// array

const arreglo =['text', 456, true, { propiedad: 21}]
arreglo[1] = 400
console.log(arreglo, arreglo[3].propiedad)

// objeto
const person = {
    nombre : 'Cristhian',
    edad:  19,
    carro: {
        marca: '...',
        color: ['rojo', 'azul', 'negro']
    },
};
person.carro.color[1] = 'verde'
console.log(person.carro.color[1])

// function
function hola(){
    console.log("Hola")
}

const hola1 = () => console.log("Hola Cristhian")
hola()
hola1()

// valores ternmarios

const resultado = 7 > 10 ? `El primer valor es mayor que el segundo`:`El segundo valor es mayor que el primero`
console.log(resultado)

// ciclos

const nombres = ['Cristhian', 'Edwin', 'Pedro', 'Alan']
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}

let contador = 1;

while(contador < 10){
    console.log(contador)
    contador++
    
}
document.body.innerHTML = contador.toString()

do{
    console.log(contador)
    contador++

}while(contador <= 10);

// mas sobre arreglos y metodos


