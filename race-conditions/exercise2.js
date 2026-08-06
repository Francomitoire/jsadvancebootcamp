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
            await updateBalanceLuciano(10);
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







function exerciseJere() {

let balanceJere = 0;
let balanceParaleloJere = 0;
let balanceTotalParaleloJere = [5, 15, 8, 12];
const ingresoTotalJere = [5, 15, 8, 12]

function updateBalanceJere(ingresoJere, lol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                balanceJere = balanceJere + ingresoJere;
                resolve();
            }, 200);
        }, Math.random() * 200);
    });
}

function updateBalanceParaleloJere(ingresoParaleloJere) {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                balanceParaleloJere = balanceParaleloJere + ingresoParaleloJere;
                resolve();
            }, 200);
        }, Math.random() * 200);
    });
}

async function contadorBalanceJere() {
    for (const ingresoJere of ingresoTotalJere) {
        await updateBalanceJere(ingresoJere);
    }
}

async function contadorParaleloJere() {
    for (const ingresoParaleloJere of balanceTotalParaleloJere) {
        await updateBalanceParaleloJere(ingresoParaleloJere);
    }
    console.log(balanceParaleloJere)


    async function chekeo() {
        if (balanceParaleloJere === 40) {
            return await new Promise((resolve, reject) => setTimeout(() => reject(`El balance paralelo es incorrecto`), 100));
        } else {
            return await new Promise((resolve, reject) => setTimeout(() => resolve(`El balance paralelo es correcto`), 100));
        }
    }

    Promise.all([chekeo()])
    .catch((error) => {
        console.error(error);
    });

}

contadorBalanceJere();
contadorParaleloJere();

}

exerciseJere();
   function JulietaExercise2() {

    let balance = 0;

    function updateBalance(delta) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const currentValue = balance;

                setTimeout(() => {
                    balance = currentValue + delta;
                    resolve();
                }, 200);

                balance += delta;
                resolve(balance);
            }, Math.random() * 200);
        });
    }

    async function contarSecuencialmente() {
        const llamados = [10, 10, 10, 10];

        for (const delta of llamados) {
            await updateBalance(delta);
        }

        return balance;
    }

    return contarSecuencialmente();
}

const promesas = [JulietaExercise2()];
Promise.all(promesas)
    .then(([balance]) => console.log(balance));
function SantiagoBaruaExercise2(amounts = [12, 5, 5, 18]) {

    async function runSequentiallyBarua() {
        for (const amount of amounts) {
            await updateBalance(amount);
        }
        console.log('Balance 1:', balance);
    }

    async function runParallelBarua() {
        balance = 0;
        await Promise.all(amounts.map((amount) => updateBalance(amount)));
        console.log('Balance 2:', balance);
    }

    runSequentiallyBarua().then(() => runParallelBarua());
}

SantiagoBaruaExercise2();
function TobiasExercise2() {
    let balance = 0;

    async function updateBalance(delta) {
        const currentBalance = balance;

        await new Promise(resolve => setTimeout(resolve, 10));
        balance = currentBalance + delta; 
    }

    async function ejecutarPractica() {

        balance = 0;
        const llamadas = [10, 10, 10, 10];

        for (const monto of llamadas) {
            await updateBalance(monto);
        }
        console.log(`Versión secuencial - Balance final: ${balance}`);



        balance = 0;


        await Promise.all([
            updateBalance(10),
            updateBalance(10),
            updateBalance(10),
            updateBalance(10)
        ]);
        console.log(`Versión paralela - Balance final: ${balance}`);
    }

    ejecutarPractica();
}

TobiasExercise2();

async function mayraExercise2 (){  
    let balance = 0;
    let balanceAnterior = 0;

    function updateBalance (delta, order){
        return new Promise((resolve) => {
        setTimeout(() => {
            balanceAnterior = balance;
            setTimeout(() => {
                balance = balanceAnterior + delta;
                resolve();
                }, Math.random() * 200)
        }, 200 * Math.random())
     })       
    }

    (async () => {
    for (let i= 0; i<4;i++){
            await updateBalance(10, 5);
            console.log (`Balance ${i}: ${balance}`);
        }
        
        Promise.all ([updateBalance(10, 1), updateBalance(15, 2), updateBalance(15, 3), updateBalance(0, 4)])
        .then (()=> console.log(`Balance promise: ${balance}`));
    }) ();
        


}

mayraExercise2();
