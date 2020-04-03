/**********************************************\
 * 
 * Snack 2: 
 * 1) Inserisci un numero.
 * 2) Se è pari stampa il numero. 
 * 3) Se è dispari stampa il numero successivo
 *  
\**********************************************/

// Inserisci un numero
var numero = parseInt( prompt('Inserisci un numero : '));

// Stampa del risultato
if ( numero % 2 == 0) {
    console.log('Il numero ' + numero + ' è pari.');
} else {
    numero++;
    console.log('Il numero è stato incremetato perchè era dispari : ' + numero)
}