/****************************************************************\
 * 
 * Snack 3 - Generatore di “nomi cognomi” casuali: 
 * prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’)
 * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’),
 * Gatsby vuole generare una falsa lista di 5 invitati.
 * 
\****************************************************************/

// Liste: Nomi / Cognomi
var nomi = ['Michele', 'Fabio', 'Roberto'];
var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];
var falsaLista = [];

// Unione nomi + cognomi
for (var i = 0; i < 5; i++) {
    falsaLista.push(nomi[randomNumber(0, nomi.length)] + cognomi[randomNumber(0, cognomi.length)]);
}

// Stampa risultato
console.log(falsaLista);

////////// FUNZIONI \\\\\\\\\
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min)) - min;
}