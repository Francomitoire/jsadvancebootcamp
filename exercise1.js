// Giovanni La Volpe

function loadA() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("A true"), 1000);
    });
}

function loadB() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("B true"), 2000);
    });
}

function loadC() {
    return new Promise((_, reject) => {
    setTimeout(() => reject("C failed"), 1500);
    });
}


Promise.all([loadA(), loadB(), loadC()])
    .then((values) => console.log(values))
    .catch((error) => console.error(error));


Promise.allSettled([loadA(), loadB(), loadC()])
    .then((values) => console.log(values));


