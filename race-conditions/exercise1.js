
// Tobias Manquez

let counter = 0;

function incrementCountertobias() {
    return new Promise((resolve) => {
        setTimeout(() => {
            counter++;
            resolve();
        }, 100);
    });
}

async function incrementSequentiallytobias() {
    await incrementCountertobias();
    await incrementCountertobias();
    await incrementCountertobias();
    await incrementCountertobias();

    console.log(`Listo: ${counter}`);
}

incrementSequentiallytobias();
