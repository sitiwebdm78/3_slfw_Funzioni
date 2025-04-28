/* Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande */

let n;
    do {
        n = Number(prompt("Inserisci un numero:"));
        if (n <= 0) {
            console.log("Per favore, inserisci un numero positivo.");
        }else if(n === "" || isNaN(n)){
            console.log("Non puoi inserire caratteri alfabetici ma solo numeri.");
        }else if(n > 9999){
            console.log("Numero Troppo Grande.")
        }
    } while (isNaN(n) || n <= 0 || n > 9999); // Continua a chiedere finché l'input non è valido.

    function contacifre (numero){
        let cifra = numero.toString(); 
            let cifralunga = cifra.length;
        for(let i = 0; i < cifra.length; i++){
            if(cifralunga === 1){
                console.log(`Il Numero inserito è ${numero} ed è composto da 1 cifre`);

            }else if(cifralunga === 2){
                console.log(`Il Numero inserito è ${numero} ed è composto da 2 cifre`);
                
            }else if(cifralunga === 3){
                console.log(`Il Numero inserito è ${numero} ed è composto da 3 cifre`);

            }else{console.log(`Il Numero inserito è ${numero} ed è composto da 4 cifre`);
            
            }
        }
    }
    
    contacifre(n);