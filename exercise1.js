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
