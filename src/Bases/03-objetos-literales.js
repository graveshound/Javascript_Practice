const persona={
    nombre:'Peter',
    apellido:'Parker',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 131001,
        lat: 15.1232,
        lng: 56.12465,
    },
};


const persona2={...persona}; //spread de persona "clonacion"
persona2.nombre='Eddie';

console.log(persona) ;//console.table(persona)
console.log(persona2);