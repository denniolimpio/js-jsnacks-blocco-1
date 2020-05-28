
// In un array sono contenuti i nomi degli invitati
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var listaInvitati = ["olimpio", "pinco", "pallino",];
// console.log(listaInvitati);

//dichiaro le mie variabli
var nomeUtente;
var nomeInserito;
var messaggio = "Mi dispiace, non sei invitato";

// variabile booleana, di default assumo che il cognome non sia presente
var nomePresente = false;

// variabili html

var outList = document.getElementById('listaInvitati');
var outMessaggio = document.getElementById("messaggio");
// chiedo il nome all'utente

nomeUtente = prompt("Inserisci nome utente").toLowerCase();

// controllo se i dati inseriti sono corretti
while ( (nomeUtente === 0) || !(isNaN(nomeUtente)) ) {
  nomeUtente = prompt("Errore. Inserisci nome utente").toLowerCase();

}
// controllo se il cognome è presente con un ciclo
var i = 0;

//CONDIZIONE:
// Il ciclo while continua fintanto che la variabile nomePresente è falsa (  per tutta la durata del contatore)
// Per le variabili booleane conviene usare " ==="
while ( nomePresente === false && i < listaInvitati.length) {

// creo una variabile di appoggio ( facoltativa)
  nomeInserito = listaInvitati[i];

  // condizione: se il nome inserito dall'utente è presente nell array, nomePresente diventa vero.
  if (nomeInserito ===  nomeUtente){
    nomePresente = true;
  }

  // chiudo il ciclo
  i++;
}

// condizione: se il nome inserito è presente nell array stampo complimenti(..), altrimenti mi dispiace (..)
if ( nomePresente) {
  messaggio = "Complimenti, sei tra gli invitati"
  console.log( messaggio);
} else {
  console.log(messaggio);

}

// stampo nell'html

outMessaggio.innerHTML = messaggio;
outList.innerHTML =  "Lista invitati " + "<li> " + listaInvitati + " </li>";
