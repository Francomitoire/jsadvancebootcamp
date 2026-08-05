function JulietaExercise2() {
    let balance = 0;

    function updateBalance(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const currentValue = balance;

                setTimeout(() => {
                    balance = currentValue + delta;
                    resolve();
                }, 200);

            }, Math.random() * 200);
        });
    }

    async function contarSecuencialmente() {
        const llamados = [10, 10, 10, 10];

        for (const delta of llamados) {
            await updateBalance(delta);
        }

        return balance;
    }

    return contarSecuencialmente();
}

const promesas = [JulietaExercise2()];
Promise.all(promesas)
    .then(([balance]) => console.log(balance));
