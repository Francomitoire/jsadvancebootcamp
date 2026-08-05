//luciano gonzalez

let contador = 0
function incrementarContadorLuciano(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const valorActual = contador
            setTimeout(()=>{
                contador = valorActual + 1
                resolve()
            },200)
        }
        ,Math.random()*200)
    })
}

async function incrementSecuentially(numero){
    for (let index = 0; index <= numero; index++) {
        await incrementarContadorLuciano()
    }
    console.log(contador)
}

incrementSecuentially(4)

