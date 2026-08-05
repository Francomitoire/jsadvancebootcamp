let counter = 0;
function incrementCounterJulieta() {
    return new Promise((resolve) =>{
    setTimeout(() => {
    const currentValue = counter;
    setTimeout(() => {
      counter = currentValue + 1;
          resolve()
    }, 200);
  }, Math.random() * 200);
}

    )};

function incrementSequentially(){
    incrementCounterJulieta()
        .then(()=> incrementCounterJulieta()) 
        .then(()=> incrementCounterJulieta())
        .then(()=> incrementCounterJulieta()) 
        .then(()=>console.log(`Listo: ${counter}`))
}
incrementSequentially();