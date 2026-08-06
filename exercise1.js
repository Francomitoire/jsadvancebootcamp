<<<<<<< HEAD
//Tobias Manquez


function loadA() { 
return new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
}

function loadB() { 
return new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
}

function loadC() { 
return new Promise((_, reject) => setTimeout(() => reject("Promise C rejected"), 1500));
    
}

Promise.all([loadA(), loadB(), loadC()])
    .then((resultados) => {
        console.log("Todo se resolvió:", resultados);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.allSettled([loadA(), loadB(), loadC()])
    .then((resultados) => {
        console.log("Resultados de todas las promesas:", resultados);
    });

/*// Julieta 

// Giovanni La Volpe

function loadA() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("A true"), 1000);
    });
}

function loadB() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("B true"), 2000);
    });
}

function loadC() {
    return new Promise((_, reject) => {
    setTimeout(() => reject("C failed"), 1500);
    });
}


Promise.all([loadA(), loadB(), loadC()])
    .then((values) => console.log(values))
    .catch((error) => console.error(error));


Promise.allSettled([loadA(), loadB(), loadC()])
    .then((values) => console.log(values));


// Julieta 
/*
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

//Santiago Barua
function loadA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('A valido');
        }, 1000);
    });
}
function loadB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('B valido');
        }, 2000);
    });
}
function loadC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('C fallo'));
        }, 1500);
    });
}

Promise.all([loadA(), loadB(), loadC()])
    .then((values) => console.log(values))
    .catch((error) => console.error(error.message));

Promise.allSettled([loadA(), loadB(), loadC()])
    .then((values) => console.log(values));
// cosme fulanito // Jeremias Sosa 

//function loadA() {
//    return new Promise((resolve) => setTimeout(resolve, 1000, 'A ok'))
//}
//function loadB() {
//    return new Promise((resolve) => setTimeout(resolve, 2000, 'B ok'))
//}
//function loadC() {
//    return new Promise((resolve, reject) => setTimeout(reject, 1500, 'C not ok'))
//}
//
//Promise.all([loadA(), loadB(), loadC()])
//    .then((results) => console.log("Todas ok:", results))
//    .catch((error) => console.log("Catch:", error)); // "C not ok"
//
//Promise.allSettled([loadA(), loadB(), loadC()])
//    .then((results) => {
//        results.forEach((resultsSettled) => {
//            if (resultsSettled.status === "fulfilled") {
//                console.log(`Resuelta: ${resultsSettled.value}`); // te da 'resuelta: A' 'resuelta: B'
//            } else {
//                console.log(`Rechazada: ${resultsSettled.value}, error: ${resultsSettled.reason}`); //  te da 'Rechazada: C Error: razon de por que'
//            }
//        });
//    });
//
//
// Mayra Cueto

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 2000);
});

const promise3 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise 3 rejected"), 1500);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log("error"));    

Promise.allSettled([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log("error 2"));    
*/
=======
// Cosme fulanito
>>>>>>> 56e5970 (chore: rename file)
