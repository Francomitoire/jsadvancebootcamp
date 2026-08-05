let counter = 0;

function incrementCounterBarua() {
    return new Promise
    ((resolve) => {
        setTimeout(() => {
            const currentValue = counter;
            setTimeout(() => {
                counter = currentValue + 1;
                resolve(counter);
            }, 200);
        }, Math.random() * 200);
    });
}

async function incrementSequentiallyBarua(times = 4) {
    for (let i = 0; i < times; i += 1) {
        await incrementCounterBarua();
    }
}

incrementSequentiallyBarua().then(() => {
    console.log(`Listo: ${counter}`);
});
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
