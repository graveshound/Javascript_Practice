const nombre= 'Peter';
const apellido='Parker';

const nombreCompleto=nombre+' '+apellido;
const completeName=`Hola mi nombre es ${nombre} ${apellido}
${1+1}`

console.log(nombreCompleto)
console.log(completeName)

function getSaludo(nombre){
    return `Hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo("Gwen")}`)