function jereExercise3() {
    let counter = 0;

    function updateCount(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                counter += number;
                resolve(counter);
            }, Math.random() * 200);
        });
    }
    function incrementCounterJere() {
        return updateCount(1).then((countNumber) => {
            console.log(`Balance: ${countNumber}`);
            return countNumber;
        });
    }
    let colaDePromesas = Promise.resolve();

    function jereExclusive(task) {
        colaDePromesas = colaDePromesas
            .then(() => task())
            .catch((error) => {
                console.error(error);
            });
        return colaDePromesas;
    }

    jereExclusive(incrementCounterJere);
    jereExclusive(incrementCounterJere);
    jereExclusive(incrementCounterJere);
    jereExclusive(incrementCounterJere);
}

jereExercise3();