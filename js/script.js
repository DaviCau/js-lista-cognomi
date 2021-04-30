/* 1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

var cognomeUtente = prompt("Inserisci il tuo cognome");
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

listaCognomi.sort();
console.log(listaCognomi);

var counter = 1;
var i = 0;
while (listaCognomi[i] != cognomeUtente) {
    counter++;
    i++;
}
console.log(counter);

for (var k = 0; k < listaCognomi.length; k++) {
    document.getElementById("lista-cognomi").innerHTML += "<li>" + listaCognomi[k] + "</li>";
}
document.getElementById("position").innerHTML = counter;