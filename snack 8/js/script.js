// Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// variabili html
var numPari = document.getElementById('verde');
var numDisp = document.getElementById('rosso');
var num = document.getElementById('giallo');

// devo fare un ciclo for che verifichi quali tra i numeri inseriti siano pari o dispari.
// se il numero è pari, lo stampo nell'id rosso ( x % 2 == 0)
// se il numero è dispari, lo stampo nell'id verde ( x % 2 != 0)

var arrayNumeri = generaNumeriRandom(40);
console.log(arrayNumeri);
num.innerHTML += arrayNumeri;

for (var i = 0; i < arrayNumeri.length; i++) {

  if (arrayNumeri[i] % 2 === 0) {

    // lo stampo nell id verde
  numPari.innerHTML +=  arrayNumeri[i] + " , ";


  } else {

    numDisp.innerHTML +=  arrayNumeri[i] + " , ";
  }
}
// console.log(arrayNumeri);



// funzione
function generaNumeriRandom (numeri) {

  var arrayNumeri = [];

  for ( i = 0; i < numeri; i++ ) {

    var generaNumero = Math.floor(Math.random() * 100) + 1;
    // console.log(generaNumero)

 arrayNumeri.push(generaNumero)
  }

  return arrayNumeri;


}
