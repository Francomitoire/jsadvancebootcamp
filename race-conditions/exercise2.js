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
        const llamados = [1, 2, 3, 4];

        for (const llamado of llamados) {
            await updateBalance(10);
        }
        console.log(balance);
    }

    contarSecuencialmente();
}

JulietaExercise2();