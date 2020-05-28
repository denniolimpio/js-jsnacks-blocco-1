// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// WHILE

// // dichiaro le mie variabii
// var numeriUtente;
// var somma = 0;
//
// // variabili html
// var risultato = document.getElementById('totale');
//
// // chiedo all'utente di inserire 5 numeri
// var i = 1;
//
// while ( i <= 5) {
//
//  console.log( "numero " + i);
//   numeriUtente = parseInt( prompt("Inserisci un numero"));
//   // console.log(numeriUtente);
// // sommo tra loro i numeri inseriti
//   somma += numeriUtente;
//   // termino il ciclo
//   i++;
// }
//
// // console.log( " La somma totale è " + somma);
//
// // stampo nell'html
// risultato.innerHTML = " La somma dei numeri inseriti è:" + somma;

// FOR


// dichiaro le mie variabii
var numeriUtente;
var somma = 0;

// variabili html
var risultato = document.getElementById('totale');

// chiedo all'utente di inserire 5 numeri
for ( var i = 1; i <= 5; i++ ){

  numeriUtente = parseInt( prompt("Inserisci un numero"));
  console.log(numeriUtente);
  // sommo tra loro i numeri inseriti
  somma += numeriUtente;

}
console.log( " La somma totale è " + somma);

// stampo nell'html
risultato.innerHTML = " La somma dei numeri inseriti è: " + somma;
