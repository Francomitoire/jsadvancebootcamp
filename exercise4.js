//Santiago Barua
function loadA() {
    return new Promise((resolve) => setTimeout(resolve, 1000, 'Paso a'))
}

function loadB() {
    return new Promise((resolve) => setTimeout(resolve, 2000, 'Paso b'))
}

function loadCFail() {
    return new Promise((resolve, reject) => setTimeout(reject, 1500, 'Fallo c'))
}

function loadC() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Paso c'))
}

function loadD() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Paso d'))
}

Promise.all([loadA(), loadB(), loadCFail(), loadD()])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:", error));

Promise.all([loadA(), loadB(), loadC(), loadD()])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:", error));