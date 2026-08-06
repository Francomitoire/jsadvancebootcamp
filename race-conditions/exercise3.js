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