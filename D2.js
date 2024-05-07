/********************************LE RISPOSTE VANNO DECOMMENTATE PER CONTROLLARLE NELLA CONSOLE UNA PER VOLTA PER EVITARE ERRORI DI CODICE IN QUANTO HO UTILIZZATO LE STESSE VARIABILI IN PIù ESERCIZI */

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
const num1 = 10;
const num2 = 6;
if (num1 > num2) {
  console.log("num1 è maggiore di num2");
} else if (num1 < num2) {
  console.log("num1 è minore di num2");
} else {
  console.log("num1 e num2 sono uguali");
}
 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
 const numEsercizio2 = 8;
if (numEsercizio2 !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let x = 10;
if (x % 5 === 0) {
  console.log("disvisibile per 5");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
 const num = 10;
const num2 = 2;
if (num === 8 || num2 === 8) {
  console.log("uno dei due numeri è uguale a 8");
} else if (num + num2 === 8) {
  console.log("la somma dei due numeri viene 8 ");
} else if (num - num2 === 8) {
  console.log("la sottrazione dei due numeri viene 8");
} 
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
 let totalShoppingCart = 60;
if (totalShoppingCart > 50) {
  console.log(
    "hai diritto alla spedizione gratuita! Il totale da pagare ammonta a: ",
    totalShoppingCart
  );
} else if (totalShoppingCart <= 50) {
  totalShoppingCart += 10;
  console.log(
    "Il totale da pagare ammonta a: ",
    totalShoppingCart,
    "sono stati applicati 10EURO di sovraprezzo per la spedizione perchè il tuo carrello non supera i 50EURO."
  );
} 
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart = 60;
let blackFriday = true;
if (blackFriday === true) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100;
  console.log(
    "Applicato sconto Black Friday del 20%, il totale ammonta a: ",
    totalShoppingCart
  );
} else if (totalShoppingCart > 50) {
  console.log(
    "hai diritto alla spedizione gratuita! Il totale da pagare ammonta a: ",
    totalShoppingCart
  );
} else if (totalShoppingCart <= 50) {
  totalShoppingCart += 10;
  console.log(
    "Il totale da pagare ammonta a: ",
    totalShoppingCart,
    "sono stati applicati 10EURO di sovraprezzo per la spedizione perchè il tuo carrello non supera i 50 EURO."
  );
}
 */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
const num1 = 3;
const num2 = 8;
const num3 = 6;

if (num1 >= num2) {
  if (num3 >= num1) {
    console.log(num3, num1, num2);
  } else {
    if (num3 >= num2) {
      console.log(num1, num3, num2);
    } else {
      console.log(num1, num2, num3);
    }
  }
} else {
  if (num3 >= num2) {
    console.log(num3, num2, num1);
  } else {
    if (num3 >= num1) {
      console.log(num2, num3, num1);
    } else {
      console.log(num2, num1, num3);
    }
  }
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*
 let variabile = 22;
if (typeof variabile === Number) {
  console.log("il valore vornito è un numero  :", variabile);
} else {
  console.log("il valore fornito non è un numero  :", variabile);
}
 */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
 const number = 14;
const risultato = number % 2;
console.log(number);
if (risultato > 0) {
  console.log("Numero dispari");
} else {
  console.log("Numero pari");
} 
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* 
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
} 
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];
console.log(array);
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let ultimoElementoArray = array.pop();
array.push(100);
console.log(array);
