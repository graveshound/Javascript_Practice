//Desestructuracion
//Asignacion Desestructurante
const persona={
    nombre:'Tony',
    edad:45,
    clave:'IronMan',
    rango:'Soldado'
};

const {nombre:nombre2}=persona;

console.log(nombre2);

//const {nombre,edad,clave,}=persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);


const retornaPersona =({nombre,edad,clave,rango='Capitan'})=>{ //si rango esta en el objeto toma ese valor
    console.log(nombre,edad,clave,rango)
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:56,
            lng:65
        }
    }
}

const avenger = retornaPersona(persona)

console.log(avenger)
const {nombreClave,anios,latlng,latlng:{lat,lng}}=avenger
console.log(nombreClave,latlng,anios)
console.log(lat,lng)

const {lat:lati,lng:longi}=latlng
console.log(lati,longi)

























