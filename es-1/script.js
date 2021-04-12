// chiedo all'utente di inserire una parola //

var x = prompt("inserisci la prima parola");
var y = prompt("inserisci la seconda parola");

// capire la più corta

var parolaCorta = "";
var parolaLunga = "";
if (x.length < y.lenght) {
    parolaCorta = x;
    parolaLunga = y;
} else if (x.length < y.lenght)

// altra versione

var parole = frase.split(' ');
console.log(parole);

var max = parole[0];

for(var i = 0; i < parole.length; i++){
  if(parole[i].length > max.length ){
    max = parole[i];
  }
}

console.log('la parola più lunga della frase è: ' + max);