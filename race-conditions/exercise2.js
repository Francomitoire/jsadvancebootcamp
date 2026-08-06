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
                console.log (balanceAnterior)
                console.log(order);
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