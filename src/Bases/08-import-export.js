//import {heroes} from './data/heroes';
//import {heroes} from './data/heroes'

import  heroes,{owners}  from "../data/heroes";

//const getHeroById=(id)=> heroes.find((hero)=>hero.id===id);
//console.log(owners)

export const getHeroById=(id)=>{
    return heroes.find((hero)=>hero.id===id);
}

//console.log(getHeroById(2));

export const getHeroesByOwner=(owner)=> heroes.filter((hero)=>hero.owner===owner);

//console.log(getHeroesByOwner('DC'))










