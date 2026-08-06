//Mayra Cueto
function mirrorA (){
    return new Promise ((reject => {
      setTimeout (() => {
        reject ("mirrorA error");
      }, 300
    )
    }))
}
function mirrorB (){
    return new Promise ((reject => {
      setTimeout (() => {
        reject ("mirrorB error");
      }, 500
    );
    }))
}

function mirrorC (){
  return new Promise ((reject) => {
    setTimeout(() => {
      reject ("mirror C data");
    }, 800
  )
  })
}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
  .then ((value) => console.log(value))
  .catch((error) => {
    if (error instanceof AggregateError) {
      console.log(error.message);
    }
  });
/*
//Julieta

function mirrorA(){
    return new Promise((_, reject)=> 
        setTimeout(()=> reject("A failed"),300))}
function mirrorB(){
    return new Promise((_, reject)=> 
        setTimeout(()=> reject("B failed"), 500))}
function mirrorC(){
    return new Promise((resolve)=>
    setTimeout(()=> resolve("mirror C data"), 800))}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
    .then((value)=> console.log(value))
    .catch((error)=> console.error(err));

function mirrorA(){
    return new Promise((_, reject)=> 
        setTimeout(()=> reject("A failed"),300))}
function mirrorB(){
    return new Promise((_, reject)=> 
        setTimeout(()=> reject("B failed"), 500))}
function mirrorC(){
    return new Promise((_, reject)=>
    setTimeout(()=> reject("C failed"), 800))}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
    .then((value)=> console.log(value))
    .catch((err)=> console.error(err));
 

//Jeremias Sosa

//Santiago Barua
function mirrorA() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("mirror A failed")), 300);
  });
}
function mirrorB() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("mirror B failed")), 500);
  });
}
function mirrorC() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("mirror C data"), 800);
  });
}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

function mirrorCFails() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("mirror C failed")), 800);
  });
}

Promise.any([mirrorA(), mirrorB(), mirrorCFails()])
  .then((value) => console.log(value))
  .catch((error) => {
    if (error instanceof AggregateError) {
      console.error(error.errors);
    } else {
      console.error(error);
    }
  });

*/