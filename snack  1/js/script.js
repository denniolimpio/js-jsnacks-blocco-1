// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// Dichiaro le mie variabili
var primoNumero;
var secondoNumero;
var messaggio = 'pareggio';
// chiedo all'utente di inserire due numeri in successione

 primoNumero = parseInt(prompt("Inserisci il primo numero"));

//Numero 1: chiedo di inserire i valori fino a quando  questi non vengono inseriti in modo corretto.
while( ( primoNumero == 0 ) || (isNaN(primoNumero))) {
  primoNumero = parseInt(prompt("Inserisci il primo numero"));
}

 secondoNumero = parseInt(prompt("Inserisci il secondo numero"));

//  Numero 2: chiedo di inserire i valori fino a quando questi non vengono inseriti in modo corretto.
while( ( secondoNumero == 0 ) || (isNaN(secondoNumero)) ){

  secondoNumero = parseInt(prompt("Inserisci il secondo numero"))
  console.log(primoNumero);
  console.log(secondoNumero);
}
// Soddisfatte le condizioni precedenti
// confronto quale tra i due numeri inseriti sia maggiore e lo stampo

if ( primoNumero > secondoNumero) {

  messaggio = " Il primo numero inserito è maggiore";
  console.log(messaggio)
}
else if ( primoNumero < secondoNumero) {
  messaggio = " Il secondo numero inserito è maggiore";

  console.log(messaggio)
} else {

  console.log( messaggio);
}


// stampo nell'html
