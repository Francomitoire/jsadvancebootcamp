//Mayra Cueto
let counterMay = 0;
function incrementCounterMay() {
  return new Promise((resolve) => {
    setTimeout(() => {
        const currentValue = counterMay;
        setTimeout(() => {
            counterMay = currentValue + 1;
            resolve();
            }, Math.random() * 200)
    })
  })
}

incrementCounterMay()
    .then (() => incrementCounterMay())
    .then (() => incrementCounterMay())
    .then (() => incrementCounterMay())
    .then (() => console.log(counterMay));
