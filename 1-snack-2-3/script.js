/*
snack 2.3
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/*
definire arrNums
sum = 0
ITERARE su arrNums
	SE i % 2 == 1
		sommare arrNums[i] a
	FINE SE
FINE CICLO

stampare sum
*/

const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 30
let sum = 0;
console.log('primo metodo');
for (let i = 0; i < arrNums.length; i++) {
	if (i % 2 == 1) {
		sum += arrNums[i];
		console.log(sum)
	}
}

let sum2 = 0
console.log('secondo metodo');
for (let i = 1; i < arrNums.length; i+=2) {
	sum2 += arrNums[i];
	console.log(sum2)
}

// console.log('risultato:', sum);