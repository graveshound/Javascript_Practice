console.log('Hola Mundo')

//Variables y Constantes

const nombre='Pedro';
let apellido='Arce';
let valorDado=5;
valorDado=4;
console.log(`${nombre}${apellido} tiro un dado de valor ${valorDado}`)

if(true){
    const nombre='Peter';
    let valorDado=6;
    console.log("valorDado dentro del Scope: "+valorDado+nombre)
}

console.log(valorDado)