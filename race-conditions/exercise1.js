// Giovanni

let counter = 0;

function incrementCounterGiovanni() {
  return new Promise((resolve) => {
    setTimeout(() => {
        if (counter < 4) {
        counter = counter + 1;
        resolve(); }
        else {
              console.log(`Listo: ${counter}`);
        }
    }, Math.random() * 200);
  });
}

async function incrementSecuentiallyGiovanni() {
  await incrementCounterGiovanni(); // 0 a 1
  await incrementCounterGiovanni(); // 1 a 2
  await incrementCounterGiovanni(); // 2 a 3
  await incrementCounterGiovanni(); // 3 a 4

  console.log(`Listo: ${counter}`);
}

incrementSecuentiallyGiovanni();