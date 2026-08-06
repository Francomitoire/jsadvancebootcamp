//Julieta

// function mirrorA(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("A failed"),300))}
// function mirrorB(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("B failed"), 500))}
// function mirrorC(){
//     return new Promise((resolve)=>
//     setTimeout(()=> resolve("mirror C data"), 800))}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
  .then ((value) => console.log(value))
  .catch((error) => console.log(error));
/*
//Julieta

// function mirrorA(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("A failed"),300))}
// function mirrorB(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("B failed"), 500))}
// function mirrorC(){
//     return new Promise((resolve)=>
//     setTimeout(()=> resolve("mirror C data"), 800))}

// Promise.any([mirrorA(), mirrorB(), mirrorC()])
//     .then((value)=> console.log(value))
//     .catch((error)=> console.error(err));

// function mirrorA(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("A failed"),300))}
// function mirrorB(){
//     return new Promise((_, reject)=> 
//         setTimeout(()=> reject("B failed"), 500))}
// function mirrorC(){
//     return new Promise((_, reject)=>
//     setTimeout(()=> reject("C failed"), 800))}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
    .then((value)=> console.log(value))
    .catch((err)=> console.error(err));
 

//Jeremias Sosa

//Santiago Barua
function mirrorA() {
 return new Promise((_, reject) => {
   setTimeout(() => reject(new Error("mirror A failed")), 300);
 });
}
function mirrorB() {
 return new Promise((_, reject) => {
   setTimeout(() => reject(new Error("mirror B failed")), 500);
 });
}
function mirrorC() {
 return new Promise((resolve) => {
   setTimeout(() => resolve("mirror C data"), 800);
 });
}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
 .then((value) => console.log(value))
 .catch((error) => console.error(error));

function mirrorCFails() {
 return new Promise((_, reject) => {
   setTimeout(() => reject(new Error("mirror C failed")), 800);
 });
}

Promise.any([mirrorA(), mirrorB(), mirrorCFails()])
 .then((value) => console.log(value))
 .catch((error) => {
   if (error instanceof AggregateError) {
     console.error(error.errors);
   } else {
     console.error(error);
   }
 });

*/

//Tobias Manquez

const mirrorA = () => new Promise((_, reject) => setTimeout(() => reject("Error A"), 300));
const mirrorB = () => new Promise((_, reject) => setTimeout(() => reject("Error B"), 500));
const mirrorC = () => new Promise((resolve) => setTimeout(() => resolve("mirror C data"), 800));


Promise.any([mirrorA(), mirrorB(), mirrorC()])
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


Promise.any([mirrorA_fail(), mirrorB_fail(), mirrorC_fail()])
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    if (error instanceof AggregateError) {
      console.log("Capturado:", error.name);
      console.log("Razones de falla:", error.errors);
    }
  });
