// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



var numeri = [];
console.log(numeri);

for (var i = 0; i < 17; i++) {
    var numero = generaRandom(1, 17);

    if(!numeri.includes(numero)) {
        numeri.push(numero);
    }

}
var numero_iterazioni = 0;
while(numeri.length < 17) {
    var numero = generaRandom(1, 100);

    if(!numeri.includes(numero)) {
        numeri.push(numero);

    }
    numero_iterazioni++;

}

function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
