let counter = 0;

function incrementCounter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentValue = counter;
            setTimeout(() => {
                counter = currentValue + 1;
                resolve(counter);
            }, 200);
        }, Math.random() * 200);
    });
}

async function incrementSequentially(times = 4) {
    for (let i = 0; i < times; i += 1) {
        await incrementCounter();
    }
}

incrementSequentially().then(() => {
    console.log(`Listo: ${counter}`);
});