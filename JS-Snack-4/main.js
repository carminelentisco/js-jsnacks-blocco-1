/**************************************************************************\
 * 
 * JSnack Bonus.
 * 1) Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3).  
 * 2) Fai la somma di tutti gli elementi che sono in posizione dispari.
 * 3) Prova prima senza funzione e poi con funzione. 
 * 
\**************************************************************************/

/************************** INIZIO FORMA BASE *****************************/

// Creazione lista numerica
var listaNumeri = [1, 4, 2, 15, 120, 17, 3];
var sommaDispari = 0;

// Loop Somma Dispari
for (var i = 0; i < listaNumeri.length; i++) {
    
    if ( pariDispari(listaNumeri[i]) == false) {
        sommaDispari += listaNumeri[i];
    }

}

console.log(sommaDispari);


////////// FUNZIONI \\\\\\\\\\

function pariDispari(numero) {
    
    if ( numero % 2 == 0) {
        return true;
     } else {
        return false;
     }
}

/************************** FINE FORMA BASE *****************************/