const personajes=['Goku','Vegeta','trunks']

console.log(personajes[0])

const [ p1 ] = personajes;
const [ ,p2 ] = personajes;
const [ ,,p3 ] = personajes;

console.log(p1,p2,p3)

const retornaArreglo=()=>{
    return ['ABC',123]
}

const arr= retornaArreglo()
console.log(arr)

const [letra,numero]=retornaArreglo();

console.log(letra,numero)

const use=(valor)=>{
    return [valor,()=>{console.log('hola mundo')}]
}

const saludo=use('Pedro')

console.log(saludo)

const [nombre,setNombre] = use('Pedro')

console.log(nombre)

setNombre()



















