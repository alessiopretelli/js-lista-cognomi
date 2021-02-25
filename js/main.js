var cognomi = ["zini", "bini", "pretelli", "zannelli", "zingoni", "gaini", "lupi"];
var cognomi_due;

cognomi.push(prompt("Inserisci il tuo cognome all'elenco, inserisci solo lettere minuscole."));

console.log(cognomi);

var num_utenti = cognomi.length;
var nuovo_utente = cognomi[num_utenti - 1];

cognomi_due = cognomi;

//Funzione per ordine alfabetico//

for (i = 0; i < cognomi_due.length; i++) {

    for (ii = i + 1; ii < cognomi_due.length; ii++) { 

        if (cognomi_due[i] > cognomi_due[ii]) {
            var r = cognomi_due[ii];
            cognomi_due[ii] = cognomi_due[i];
            cognomi_due[i] = r;
        }

    }
}

for (i = 0; i < cognomi_due.length; i++) {
    document.getElementById("lista").innerHTML += "<li>" + cognomi_due[i] + "</li>";

    if (nuovo_utente == cognomi_due[i]) {
        alert(cognomi_due[i] + ", posizione nr. " + (i + 1) + ".");
    } 

}

//funzione per ordinamento valori numerici//
/*
const num = [];
const num_num = prompt("Quanti numeri vuoi inserire?");

for (i = 0; i < num_num; i++) {
    num.push(prompt("Inserisci un numero.") * 1); // inserendo "* 1" il prompt aggiunge un valore numerico e non una stringa//
    console.log(num[i]);
}

for (i = 0; i < num.length; i++) {

    for (ii = i + 1; ii < num.length; ii++) { 
        
        if (num[i] > num[ii]) {
            const r = num[ii];
            num[ii] = num[i];
            num[i] = r;
        }

    }

}

console.log(num);
*/