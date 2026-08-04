// Mayra Cueto

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 2000);
});

const promise3 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise 3 rejected"), 1500);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log("error"));    

Promise.allSettled([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log("error 2"));    