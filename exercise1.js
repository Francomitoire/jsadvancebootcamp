// cosme fulanito

function loadA() {
  return new Promise((resolve) => setTimeout(() => resolve("A ok"), 1000));
}

function loadB() {
  return new Promise((resolve) => setTimeout(() => resolve("B ok"), 2000));
}

function loadC() {
  return new Promise((_, reject) => setTimeout(() => reject("C failed"), 1500));
}

Promise.all([loadA(), loadB(), loadC()])
  .then((results) => console.log("all resueltas:", results))
  .catch((error) => console.log("all catch:", error));

Promise.allSettled([loadA(), loadB(), loadC()])
  .then((results) => console.log("allSettled:", results))
  .catch(() => console.log("esto nunca corre"));


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
    .catch((reason) =>console.log(reason))3