// Generatore di “nomi cognomi” casuali:
// prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.


// scrivo una lista di nomi da cui attingere per
// generare una falsa lista di invitati

var listNomi =  [ "dennis", "antonio", "andrea", "carmine"];
console.log("lista nomi ", listNomi);

// scrivo una lista di cognomi da cui attingere per
// generare una falsa lista di invitati

var listCognomi = [ "rossi", "esposito", "motta", "ferrara"];
console.log("list Cognomi ",listCognomi);

// numero invitati
var numeroInvitati = 8;
var listaInvitati = [];

//lista invitati random
for (var i = 0; i < numeroInvitati; i++) {
  // console.log([i]);


  // pesco un nome dall array listNomi
  var generaNome = Math.floor(Math.random() * listNomi.length);
  var nomeRandom = listNomi [generaNome];

  // console.log(generaNome);
  // console.log(nomeRandom);

  // pesco un cognome dall array listNomi
  var generaCognome = Math.floor(Math.random() * listCognomi.length);
  var cognomeRandom = listCognomi[generaCognome];
  //
  // console.log(generaCognome);
  // console.log(cognomeRandom);

  var nomeCognomeRandom = cognomeRandom + " "  + nomeRandom;

  listaInvitati.push(nomeCognomeRandom);

}

console.log( "Lista invitati random", listaInvitati);
