//Jeremias Sosa
function loadA() {
    return new Promise((resolve) => setTimeout(resolve, 1000, 'Tobias'))
}

function loadB() {
    return new Promise((resolve) => setTimeout(resolve, 2000, 'Giovanni'))
}

function loadCFail() {
    return new Promise((resolve, reject) => setTimeout(reject, 1500, 'Falto Barua'))
}

function loadC() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Barua'))
}

function loadD() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Mayra'))
}

function loadE() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Juli'))
}

function loadF() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Mateo'))
}

function loadG() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Gonza'))
}

function loadH() {
    return new Promise((resolve) => setTimeout(resolve, 1500, 'Jere'))
}

Promise.all([loadA(), loadB(), loadCFail(), loadD(), loadE(), loadF(), loadG(), loadH()])
    .then((results) => console.log("Todas ok:", results))
    .catch((error) => console.log("Catch:", error));

Promise.all([loadA(), loadB(), loadC(), loadD(), loadE(), loadF(), loadG(), loadH()])
    .then((results) => console.log("Todas ok:", results))
    .catch((error) => console.log("Catch:", error));
