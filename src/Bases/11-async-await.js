/*const getImagenPromesa= ()=>{
    const promesa= new Promise((resolve,reject)=>{
        resolve(URL)
    })
}

getImagenPromesa().then(console.log); */

/*const getImagen= async()=>{
    return URL
}

getImagen().then(console.log)*/

const getImagen= async()=>{
    try{
    const apiKey="2vvv5c6ZhXIOqwnlIF6D3WsA6LLkC79b";

    const resp=await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);  

    const {data}=await resp.json()
    const {url}=data.images.original;
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img)
}
catch(error){
 //manejo del error
 console.log(error)
}}
getImagen();