function SantiagoBaruaExercise3() {
    let balance = 0;

    function updateBalance(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                balance += delta;
                resolve(balance);
            }, Math.random() * 200);
        });
    }

    function incrementCounter() {
        return updateBalance(1).then((nuevoBalance) => {
            console.log(`Balance: ${nuevoBalance}`);
            return nuevoBalance;
        });
    }

    let colaDePromesas = Promise.resolve();

    function runExclusive(task) {
        colaDePromesas = colaDePromesas
            .then(() => task())
            .catch((error) => {
                console.error(error);
            });

        return colaDePromesas;
    }

    runExclusive(incrementCounter);
    runExclusive(incrementCounter);
    runExclusive(incrementCounter);
    runExclusive(incrementCounter);
}

SantiagoBaruaExercise3();

// function jereExercise3() {
//     let counter = 0;

//     function updateCount(number) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 counter += number;
//                 resolve(counter);
//             }, Math.random() * 200);
//         });
//     }
//     function incrementCounterJere() {
//         return updateCount(1).then((countNumber) => {
//             console.log(`Balance: ${countNumber}`);
//             return countNumber;
//         });
//     }
//     let colaDePromesas = Promise.resolve();

//     function jereExclusive(task) {
//         colaDePromesas = colaDePromesas
//             .then(() => task())
//             .catch((error) => {
//                 console.error(error);
//             });
//         return colaDePromesas;
//     }

//     jereExclusive(incrementCounterJere);
//     jereExclusive(incrementCounterJere);
//     jereExclusive(incrementCounterJere);
//     jereExclusive(incrementCounterJere);
// }

// jereExercise3();

// function lucianoGonzalezExercise3(){
// let contador = 0;

// function updateBalanceLuciano(delta) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//     contador = delta
//     resolve(contador)
//         }, Math.random() * 200)
//     })
// }
// let colaPromesas = Promise.resolve()

// function agregarACola(delta) {
// colaPromesas = colaPromesas.then(() => {
//     return updateBalanceLuciano(delta).then((nuevoContador) => {
//     console.log(`Resultado: ${nuevoContador}`)
//         return nuevoContador
//         })
//     })
//     return colaPromesas;
// }
// agregarACola(1);
// agregarACola(2);
// agregarACola(3);
// agregarACola(4);
// }
// lucianoGonzalezExercise3()

// function TobiasExercise3() {
//     let balance = 0;

//     function updateBalance(delta) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 balance += delta;
//                 resolve(balance);
//             }, Math.random() * 400);
//         });
//     }

//     function incrementCounter() {
//         return updateBalance(1).then((nuevoBalance) => {
//             console.log(`Balance: ${nuevoBalance}`);
//             return nuevoBalance;
//         });
//     }

//     let filaDePromesas = Promise.resolve();

//     function runExclusive(task) {
//         filaDePromesas = filaDePromesas
//             .then(() => task())
//             .catch((error) => {
//                 console.error(error);
//             });

//         return filaDePromesas;

//     }

//     runExclusive(incrementCounter);
//     runExclusive(incrementCounter);
//     runExclusive(incrementCounter);
//     runExclusive(incrementCounter);
    
// }
// TobiasExercise3();



// function Exercise3Gio() {
//     let balance = 0;

//     function updateBalance(delta) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 balance += delta;
//                 resolve(balance);
//             }, Math.random() * 200);
//         });
//     }

//     function incrementCounterGio() {
//         return updateBalance(1).then((nuevoBalance) => {
//             console.log(`Balance: ${nuevoBalance}`);
//             return nuevoBalance;
//         });
//     }

//     let cola = Promise.resolve();

//     function runExclusive(task) {
//             cola = cola
//             .then(() => task());
//         return cola;
//     }

//     runExclusive(incrementCounterGio);
//     runExclusive(incrementCounterGio);
//     runExclusive(incrementCounterGio);
//     runExclusive(incrementCounterGio);
// }

// Exercise3Gio();
