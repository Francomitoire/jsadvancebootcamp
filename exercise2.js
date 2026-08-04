function work() { /* resuelve a ~2000ms */ }
const timeout = (ms) => new Promise((_, reject) =>
  setTimeout(() => reject(new Error("timed out")), ms)
);
