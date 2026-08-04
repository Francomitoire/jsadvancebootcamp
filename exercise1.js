// cosme fulanito // Jeremias Sosa 

function loadA() {
    return new Promise((resolve) => setTimeout(resolve, 1000, 'A ok'))
}
function loadB() {
    return new Promise((resolve) => setTimeout(resolve, 2000, 'B ok'))
}
function loadC() {
    return new Promise((resolve, reject) => setTimeout(reject, 1500, 'C not ok'))
}

Promise.all([loadA(), loadB(), loadC()])
    .then((results) => console.log("Todas ok:", results))
    .catch((error) => console.log("Catch:", error)); // "C not ok"

Promise.allSettled([loadA(), loadB(), loadC()])
    .then((results) => {
        results.forEach((resultsSettled) => {
            if (resultsSettled.status === "fulfilled") {
                console.log(`Resuelta: ${resultsSettled.value}`); // te da 'resuelta: A' 'resuelta: B'
            } else {
                console.log(`Rechazada: ${resultsSettled.value}, error: ${resultsSettled.reason}`); //  te da 'Rechazada: C Error: razon de por que'
            }
        });
    });
// Luciano Gonzalez
function loadA() {
    return new Promise((resolve) => {
    setTimeout(resolve("bien1"), 1000)
    })
}
function loadB() {
    return new Promise((resolve) => {
    setTimeout(resolve("bien2"), 2000)
    });
}

function loadC() {
    return new Promise((resolve ,reject) => {
    setTimeout(reject("error"), 1500)
    })
}

Promise.all([loadA(), loadB(), loadC()])
    .catch((reason) => console.log(reason))


Promise.allSettled([loadA(), loadB(), loadC()])
    .then((values) => console.log(values))
    .catch((reason) =>console.log(reason))
