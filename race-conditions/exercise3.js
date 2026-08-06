function MayraCuetoExercise3(){
    let balance = 0;

     function updateBalance (delta){
        return new Promise((resolve) => {
        setTimeout(() => {
            balanceAnterior = balance;
            setTimeout(() => {
                balance = balanceAnterior + delta;
                console.log (balance);
                resolve(balance);
                }, Math.random() * 200)
        }, 200 * Math.random())
     })       
    }

    let colaPromesas = Promise.resolve();

    function agregarACola(delta){
        colaPromesas = colaPromesas.then(()=>{
           return updateBalance(delta).then((balance) => {
            console.log(`Resultado: ${balance}`);
            return balance;
        })
    })
    return colaPromesas;
}

    agregarACola(1);
    agregarACola(2);
    agregarACola(3);
    agregarACola(4);

}
MayraCuetoExercise3();

/*
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
*/
    

TobiasExercise3();



function Exercise3Gio() {
    let balance = 0;

    function updateBalance(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                balance += delta;
                resolve(balance);
            }, Math.random() * 200);
        });
    }

    function incrementCounterGio() {
        return updateBalance(1).then((nuevoBalance) => {
            console.log(`Balance: ${nuevoBalance}`);
            return nuevoBalance;
        });
    }

    let cola = Promise.resolve();

    function runExclusive(task) {
            cola = cola
            .then(() => task());
        return cola;
    }

    runExclusive(incrementCounterGio);
    runExclusive(incrementCounterGio);
    runExclusive(incrementCounterGio);
    runExclusive(incrementCounterGio);
}

Exercise3Gio();