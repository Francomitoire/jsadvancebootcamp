let counter = 0;

function incrementCounterJere() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentValueJere = counterJere;
            setTimeout(() => {
                counterJere = currentValueJere + 1;
                resolve();
            }, 200);
        }, Math.random() * 200);
    });
}

async function incrementSequentiallyJere(numberJere) {
    for (let i = 0; i < numberJere; i++) {
        await incrementCounterJere();
    }
    console.log(`Listo: ${counterJere}`);
}

incrementSequentiallyJere(4);

/*
// Tobias Manquez

let counter = 0;

function incrementCountertobias() {
    return new Promise((resolve) => {
        setTimeout(() => {
            counter++;
            resolve();
        }, 100);
    });
}

async function incrementSequentiallytobias() {
    await incrementCountertobias();
    await incrementCountertobias();
    await incrementCountertobias();
    await incrementCountertobias();

    console.log(`Listo: ${counter}`);
}

incrementSequentiallytobias();
*/

// let counter = 0;

// function incrementCounterBarua() {
//     return new Promise
//     ((resolve) => {
//         setTimeout(() => {
//             const currentValue = counter;
//             setTimeout(() => {
//                 counter = currentValue + 1;
//                 resolve(counter);
//             }, 200);
//         }, Math.random() * 200);
//     });
// }

// async function incrementSequentiallyBarua(times = 4) {
//     for (let i = 0; i < times; i += 1) {
//         await incrementCounterBarua();
//     }
// }

// incrementSequentiallyBarua().then(() => {
//     console.log(`Listo: ${counter}`);
// });
//Mayra Cueto
//let counterMay = 0;
//function incrementCounterMay() {
 // return new Promise((resolve) => {
 //   setTimeout(() => {
 //       const currentValue = counterMay;
 //       setTimeout(() => {
 //           counterMay = currentValue + 1;
 //           resolve();
 //           }, Math.random() * 200)
 //   })
 // })
//}

//incrementCounterMay()
//    .then (() => incrementCounterMay())
//    .then (() => incrementCounterMay())
//    .then (() => incrementCounterMay())
//    .then (() => console.log(counterMay));

/*let counter = 0;
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
incrementSequentially();*/