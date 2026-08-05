let counter = 0;

function incrementCounterJere() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentValueJere = counterJere;
            setTimeout(() => {
                counterJere = currentValueJere + 1;
                resolve();
            }, 200);
        }, Math.random() * 200);
    });
}

async function incrementSequentiallyJere(numberJere) {
    for (let i = 0; i < numberJere; i++) {
        await incrementCounterJere();
    }
    console.log(`Listo: ${counterJere}`);
}

incrementSequentiallyJere(4);