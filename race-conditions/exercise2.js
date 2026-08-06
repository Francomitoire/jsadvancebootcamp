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