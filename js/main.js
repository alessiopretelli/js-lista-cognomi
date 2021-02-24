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