var cognomi = ["pretelli", "zannelli", "zingoni", "gaini", "lupi"];
var cognomi_due;

cognomi.push(prompt("Inserisci il tuo cognome all'elenco, inserisci solo lettere minuscole."));


for (i = 0; i < cognomi.length; i++) {
    console.log(cognomi[i]);
}

var num_utenti = cognomi.length;
var nuovo_utente = cognomi[num_utenti - 1];

cognomi_due = cognomi;

cognomi_due.sort();

for (i = 0; i < cognomi_due.length; i++) {
    document.getElementById("lista").innerHTML += "<li>" + cognomi_due[i] + "</li>";
    if (nuovo_utente == cognomi_due[i]) {
        alert(cognomi_due[i] + ", posizione nr. " + (i + 1) + ".");
        
    } 
}
