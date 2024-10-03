// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// 




/* creao un prompt x lutente */
let emailUser = prompt("inserisci la tua email")

/* creo un array con le email che possono accedere */
const listEmails =  ["email1", "email2", "email3", "email4"]

/* creao la condizione che se la lista include la mail dell utente ==> sara' valido il login */
if (listEmails.includes(emailUser)) {
    console.log("effettuato login");  
}

// * creao la condizione che se la lista  noninclude la mail dell utente ==> sara' invalido il login */
else {
    console.log("invalid login");
    

}



//  Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


let randomNumber = Math.floor((Math.random()*6) +1)
console.log(randomNumber);

/* con il metodo math.random * 6, scrivo un numero decimale compreso tra 0 e poco meno di 6 */
/* con math.floor ottengo un numero intero ma arrotonda verso il basso quindi ottengo solo numeri tra 0 e 5, pertanto devo aggiungere 1 per ottenere il range giusto */


let pcScore = randomNumber;
let playerScore = randomNumber;

if (pcScore > playerScore) {
    console.log("pc is the winner");
    
    
}

else if (playerScore > pcScore) {
    console.log("player is the winner ");
    

} 

else {
    console.log("pareggio");
    
    
}
