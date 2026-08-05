let counter = 0;

function incrementCounterBarua() {
    return new Promise
    ((resolve) => {
        setTimeout(() => {
            const currentValue = counter;
            setTimeout(() => {
                counter = currentValue + 1;
                resolve(counter);
            }, 200);
        }, Math.random() * 200);
    });
}

async function incrementSequentiallyBarua(times = 4) {
    for (let i = 0; i < times; i += 1) {
        await incrementCounterBarua();
    }
}

incrementSequentiallyBarua().then(() => {
    console.log(`Listo: ${counter}`);
});