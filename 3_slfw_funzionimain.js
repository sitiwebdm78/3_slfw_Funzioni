/* Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande */

    function contacifre(numero){
        if(numero < 10){
            console.log("Il Numero è composto da 1 cifra");
        }else if(numero < 100){
            console.log("Il Numero è composto da 2 cifre");
        }else if(numero < 1000){
            console.log("Il Numero è composto da 3 cifre");   
        }else if(numero < 10000){
            console.log("Il Numero è composto da 4 cifre");
        }else{
            console.log("Numero troppo grande.");
        }
    }

    contacifre(67659);

