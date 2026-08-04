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

