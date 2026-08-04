// Julieta 

function loadA(){
     return new Promise ((resolve) =>{
    setTimeout(() => resolve("Promise 1 resolved"),1000);
});}
function loadB(){
   return new Promise((resolve)=>{
    setTimeout(()=> resolve("promise 2 resolved"), 2000);
});}
function loadC(){ 
   return new Promise ((reject)=> {
    setTimeout(() => reject("promise 3 rejected"), 1500);
})}

Promise.all([loadA(), loadB(), loadC()])
 .then((results)=>{ console.log(results)})
    .catch((error)=>{ console.log(error)})

Promise.allSettled([loadA(), loadB(), loadC()])
    .then((results)=>{ console.log(results)})
