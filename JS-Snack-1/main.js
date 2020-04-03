/***************************************************************************\
 * 
 * Snack 1: 
 * 1) L’utente inserisce due parole in successione, con due prompt.
 * 2) Utilizza una funzione per determinare e ritornare la parola più lunga.
 * 3) Il software stampa la parola più lunga.
 * 
\***************************************************************************/

/************************ INIZIO VERSIONE BASE *****************************/

// Dati dall' utente
var parola1 = prompt('Inserisci la 1° parola : ');
var parola2 = prompt('Inserisci la 2° parola : ');

// Risultato
var risultato = lunghezzaString(parola1, parola2);
console.log(risultato); 

////////// FUNZIONE \\\\\\\\\\

// Lunghezza elemento string. + comparazione [ Valore di ritorno = stringa ( > ) ]
function lunghezzaString(string1, string2) {
    
    if(string1.length > string2.length) {
        return string1 + " è più lunga.";
    } else if (string2.length > string1.length ) {
        return string2 + " è più lunga.";
    }
    return 'Hanno uguale lunghezza';

}

/************************** FINE VERSIONE BASE ******************************/