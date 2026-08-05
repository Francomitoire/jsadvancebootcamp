//luciano gonzalez

let contador = 0
function incrementarContadorLuciano(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const valorActual = contador
            setTimeout(()=>{
                contador = valorActual + 1
                resolve()
            },200)
        }
        ,Math.random()*200)
    })
}

async function incrementSecuentially(numero){
    for (let index = 0; index <= numero; index++) {
        await incrementarContadorLuciano()
    }
    console.log(contador)
}

incrementSecuentially(4)



// Giovanni








// let counter = 0;

// function incrementCounterGiovanni() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         if (counter < 4) {
//         counter = counter + 1;
//         resolve(); }
//         else {
//               console.log(`Listo: ${counter}`);
//         }
//     }, Math.random() * 200);
//   });
// }

// async function incrementSecuentiallyGiovanni() {
//   await incrementCounterGiovanni(); // 0 a 1
//   await incrementCounterGiovanni(); // 1 a 2
//   await incrementCounterGiovanni(); // 2 a 3
//   await incrementCounterGiovanni(); // 3 a 4

//   console.log(`Listo: ${counter}`);
// }

// incrementSecuentiallyGiovanni();

/*let counter = 0;

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
*/
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
