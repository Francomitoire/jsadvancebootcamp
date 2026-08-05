function TobiasExercise2() {
    let balance = 0;

    async function updateBalance(delta) {
        const currentBalance = balance;

        await new Promise(resolve => setTimeout(resolve, 10));
        balance = currentBalance + delta; 
    }

    async function ejecutarPractica() {

        balance = 0;
        const llamadas = [10, 10, 10, 10];

        for (const monto of llamadas) {
            await updateBalance(monto);
        }
        console.log(`Versión secuencial - Balance final: ${balance}`);



        balance = 0;


        await Promise.all([
            updateBalance(10),
            updateBalance(10),
            updateBalance(10),
            updateBalance(10)
        ]);
        console.log(`Versión paralela - Balance final: ${balance}`);
    }

    ejecutarPractica();
}

TobiasExercise2();