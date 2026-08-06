function lucianoGonzalezExercise3(){
let contador = 0;

function updateBalanceLuciano(delta) {
    return new Promise((resolve) => {
    setTimeout(() => {
    contador = delta
    resolve(contador)
        }, Math.random() * 200)
    })
}
let colaPromesas = Promise.resolve()

function agregarACola(delta) {
colaPromesas = colaPromesas.then(() => {
    return updateBalanceLuciano(delta).then((nuevoContador) => {
    console.log(`Resultado: ${nuevoContador}`)
        return nuevoContador
        })
    })
    return colaPromesas;
}
agregarACola(1);
agregarACola(2);
agregarACola(3);
agregarACola(4);
}
lucianoGonzalezExercise3()

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