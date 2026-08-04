function work () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Work Done");
        }, 2000
        );
    })
};

const timeout = (ms) => new Promise((_, reject) =>
  setTimeout(() => reject(new Error("timed out")), ms)
);

Promise.race([work(), timeout(1000)])
.then ((values) => console.log(values))
.catch((error) => console.log(error));

Promise.race([work(), timeout(2500)])
.then ((values) => console.log(values));