// Funciones en JS

/*function saludar(nombre){
    return `Hola, ${nombre}`
} 
Hacerla mejor como esta abajo*/

const saludar=function(nombre){
    return `Hola, ${nombre}`;
} 

const saludar2=(nombre)=>{
    return `Hola, ${nombre}`;
} 

const saludar3=(nombre)=> `Hola, ${nombre}`;
const saludar4=()=>`Hola Mundo`

console.log(saludar("Peter"));
console.log(saludar2("Peter"));
console.log(saludar3("Peter"));
console.log(saludar4());

const getUser=()=>({
    uid:'ABC123',
    username:'diogenes'
})

const user = getUser();
console.log(user);

//Tarea

function getActivo(nombre){
    return{
        id:'10',
        name:nombre
    }
}

const userActivo=getActivo('Peter')
console.log(userActivo);

const activo=(nombre)=>({
    id:'10',
    name:nombre
})

const userActivo2=activo('Peter');
console.log(userActivo2)

















