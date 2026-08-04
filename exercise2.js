//luciano gonzalez
function work() {
    return new Promise((resolve) => setTimeout(resolve, 2000, 'work done'))
}

const timeout = (ms) => new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timed out")), ms)
);

Promise.race([work(), timeout(1000)])
    .then((value) => {console.log(value)},
    (reason) => {console.log(reason)},)

Promise.race([work(), timeout(2500)])
    .then((value) => {console.log(value)},
        (reason) => {console.log(reason);})




//Jeremias Sosa

/*
function work() {
    return new Promise((resolve) => setTimeout(resolve, 2000, 'Work ok'))
}

const timeout = (ms) => new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timed out")), ms)
);

Promise.race([work(), timeout(1000)])
    .then(
        (value) => {
            console.log(value);
        },
        (reason) => {
            console.log(reason);
        },
    );

Promise.race([work(), timeout(2500)])
    .then(
        (value) => {
            console.log(value);
        },
        (reason) => {
            console.log(reason);
        },
    );
//


//Santiago barua
//function work() {
//  return new Promise((resolve) => {
//    setTimeout(() => resolve("work done"), 2000);
//  });
//}
//const timeout = (ms) => new Promise((_, reject) =>
//  setTimeout(() => reject(new Error("timed out")), ms)
//);

//Promise.race([work(), timeout(1000)])
//  .then((value) => console.log(value))
//  .catch((error) => console.error(error.message));

//Promise.race([work(), timeout(2500)])
//  .then((value) => console.log(value))
//  .catch((error) => console.error(error.message));
*/
