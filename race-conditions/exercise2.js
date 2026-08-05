function SantiagoBaruaExercise2(amounts = [12, 5, 5, 18]) {
    let balance = 0;

    function updateBalance(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                balance += delta;
                resolve(balance);
            }, Math.random() * 200);
        });
    }

    async function runSequentiallyBarua() {
        for (const amount of amounts) {
            await updateBalance(amount);
        }
        console.log('Balance 1:', balance);
    }

    async function runParallelBarua() {
        balance = 0;
        await Promise.all(amounts.map((amount) => updateBalance(amount)));
        console.log('Balance 2:', balance);
    }

    runSequentiallyBarua().then(() => runParallelBarua());
}

SantiagoBaruaExercise2();

