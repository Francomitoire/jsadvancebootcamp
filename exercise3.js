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
    