// Cosme fulanito


function cargarA() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("A"), 1000);
  });
}

function cargarB() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("B"), 2000);
  });
}

function cargarC() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("C fallo")), 1500);
  });
}