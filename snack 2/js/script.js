// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.


// dichiaro le mie variabili

var primaParola;
var secondaParola;
var messaggio = " Le parole inserite hanno la stessa lunghezza";

// variabili html
var outPrimaParola = document.getElementById('ParolaUno');
var outSecondaParola = document.getElementById('ParolaDue');
var risultato = document.getElementById('risultato');

// chiedo all'utente di inserire la prima primaParola
primaParola = prompt("Inserisci la prima parola");
// console.log(" La prima parola inserita è: " + primaParola);

// validazione
while ( ( primaParola === 0) || !( isNaN(primaParola) ) ) {

  primaParola = prompt("Errore: Inserisci la prima parola ");
}

// chiedo all'utente di inserire la secondaParola
secondaParola = prompt("Inserisci la seconda parola");
// console.log(" La seconda parola inserita è: " + secondaParola);

// validazione
while ( ( secondaParola === 0) || !( isNaN(secondaParola) ) ) {

  secondaParola = prompt("Errore: Inserisci la seconda Parola");
}

// confronto quale tra le due parola inserite sia piu lunga e la stampo.

if ( primaParola.length > secondaParola.length ) {
  messaggio = " La prima parola è piu lunga";
  // console.log(messaggio)

} else if (primaParola.length < secondaParola.length) {
  messaggio = " La seconda parola è piu lunga "
  // console.log( messaggio);

} else {
  console.log(messaggio);
}

// stampo nell'html

outPrimaParola.innerHTML =  "La prima parola è: " + primaParola;
outSecondaParola.innerHTML = "La seconda parola è: " + secondaParola;
risultato.innerHTML = messaggio;
