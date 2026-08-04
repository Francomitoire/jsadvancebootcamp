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
