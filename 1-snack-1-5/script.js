/*
snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*
creiamo l'array vuoto arrNums
ITERA per 6 volte
	chiedi un numero all'utente e salviamolo in num
	SE (num % 2 == 1)
		pushiamo il numero nell'array arrNums
	FINE SE
FINE CICLO
*/

const arrNums = [];

for (let i = 0; i < 6; i++) {
	const num = parseInt(prompt('Dammi un numero'));
	if (num % 2 == 1) {
		arrNums.push(num);
		// arrNums[i] = num; // crea elementi vuoti nell'array e non va bene
	}
}

console.log(arrNums);



// 50 / 2 = 25 con resto 0
// 51 / 2 = 25 con resto 1

// 50 % 2 = 0
// 51 % 2 = 1