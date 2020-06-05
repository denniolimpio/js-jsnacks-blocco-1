// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.



// array con piu elementi

var arrayUno = [ 1, 2, 3, 4, 10, 55, 77];
console.log("ArrayUno prima", arrayUno);


// array con meno elementi

var arrayDue = [ 4, 5, 99];
console.log("arrayDue prima", arrayDue);



// aggiungo gli elementi all'array con meno elementi fino a quando diventa della stessa lunghezza dell'altro

while (arrayUno.length != arrayDue.length ) {

  var elementiRandom = Math.floor(Math.random() * 101);

  if (arrayUno.length < arrayDue.length ) {

    console.log(" arrayUno ha meno elementi");
    arrayUno.push(elementiRandom);

  } else if (arrayUno.length > arrayDue.length) {
    console.log(" arrayDue ha meno elementi");
    arrayDue.push(elementiRandom);

  }



  //aggiungo gli elementi all'array piu corto

}


console.log("ArrayUno dopo ",arrayUno);
console.log( "ArrayDue dopo ",arrayDue);
