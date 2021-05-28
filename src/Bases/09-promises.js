import {getHeroById,getHeroesByOwner} from './08-import-export'
/*const promesa=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const heroe=getHeroById(2);
        console.log(heroe)
        resolve(heroe)
        //reject('No se pudo encontrar el heroe '+heroe.name)
    },2000)
});

promesa.then((hero)=>{
    console.log('Then de la promesa')
    console.log('Heroe', hero)
})
.catch((err)=>console.warn(err))*/

const getHeroeByIdAsync=(id)=>{
   return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const heroe=getHeroById(id);
            console.log(heroe)
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe')
            }
            
           
        },2000)
    });
   // return promesa;
}
getHeroeByIdAsync(2)
    .then(/*(heroe)=>console.log('Heroe: ',heroe)*/console.log)
    .catch(/*(err)=>console.warn(err)*/console.warn)







