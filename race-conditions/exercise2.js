let contador = 0
function updateBalanceLuciano(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                contador += delta;
                resolve(contador);
            }, Math.random() * 200);
        });
    }

    async function secuencialLuciano() {
        const iteraciones = [1,2,3,4];
        for (const iteracion of iteraciones) {
            await updateBalance(10);
        }
        console.log(contador);
    }

    async function paraleloLuciano(){
        variables=[10,10,10,10]
        await Promise.all(variables.map(variables=>updateBalanceLuciano(variables)))
        console.log(contador)
        

    }

secuencialLuciano()
paraleloLuciano()