function mirrorA() {
    return new Promise((resolve,reject) => setTimeout(reject(new Error ('mirror A data')), 300))
}
function mirrorB() {
    return new Promise((resolve,reject) => setTimeout(reject(new Error ('mirror B data')), 500))
}
function mirrorC() {
    return new Promise((resolve,reject) => setTimeout(resolve, 800, 'mirror C data'))
}

function mirrorCFail() {
    return new Promise((resolve,reject) => setTimeout(reject, 800, 'mirror C data'))
}

Promise.any([mirrorA(), mirrorB(), mirrorC()])
    .then((results) => console.log(`Ok: ${results}`))
    .catch((error) => console.log(`Catch: ${error}`)); 


Promise.any([mirrorA(), mirrorB(), mirrorCFail()])
    .then((results) => console.log(`Ok: ${results}`))
    .catch((error) => console.log(`Catch: ${error}`)); 
