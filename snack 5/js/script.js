// Chiedi un numero di 4 cifre e somma tra loro le cifre che lo compongono

//Nota: Il prompt restituisce già una stringa per cui non ho bisogno
// di convertirlo per misurarne la lunghezza.

var numeroUtente = prompt( " Inserisci un numero di 4 cifre");

console.log(numeroUtente);
// uso la funzione .trim() per eliminare eventuali spazi immessi dall'utente
numeroUtente = numeroUtente.trim();

// validazione

// Ripeto il prompt fino a quando l'utente non inserisce 4 cifre.
// Non sono ammesse lettere e numeri minori o maggiori di 4 cifre

while ( numeroUtente.length != 4 || (isNaN(numeroUtente))) {

  numeroUtente = prompt ("Errore. Devi inserire 4 cifre");
  numeroUtente = numeroUtente.trim();

}

// eseguo il calcolo
// dal momento che non posso sommare i caratteri di una stringa ho bisogno di convertire questa in
// un array. Uso la funzione split() // Ps: facoltativo. In realtà in js senza split funzionerebbe lo stesso!

// var numeroUtenteArray = numeroUtente.split("");
// console.log(numeroUtenteArray);

var somma = 0;

for (var i = 0; i < numeroUtente.length; i++) {

  somma = somma + parseInt(numeroUtente[i]);

}

console.log(" La somma tra le cifre che compongono il numero è: " + somma);
