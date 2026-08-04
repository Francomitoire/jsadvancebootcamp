//Santiago Barua
function loadA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('A valido');
        }, 1000);
    });
}
function loadB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('B valido');
        }, 2000);
    });
}
function loadC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('C fallo'));
        }, 1500);
    });
}

Promise.all([loadA(), loadB(), loadC()])
    .then((values) => console.log(values))
    .catch((error) => console.error(error.message));

Promise.allSettled([loadA(), loadB(), loadC()])
    .then((values) => console.log(values));
