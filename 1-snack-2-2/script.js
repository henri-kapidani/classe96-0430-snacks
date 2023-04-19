/*
snack 2.2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

/*
definiamo l'array arrFirstNames con una lista di nomi
definiamo l'array arrLastNames con una lista di cognomi
defininamo l'array vuoto arrFullNames per contenere la lista dei falsi nomi degli invitati

ITERARE sull'array arrFirstNames
	definire firstName come l'elemento in posizione i dell'array
	generare un numero random da 0 incluso a arrLastNames.lenght escluso e chiamarlo randIndex
	lastName = arrLastNames[randIndex]
	fullName = concatenare nome e cognome
	pushare fullName in arrFullNames
FINE CICLO

stampare la lista
*/



// definiamo l'array arrFirstNames con una lista di nomi
const arrFirstNames = ['Pinco', 'Pippo', 'Bo', 'Nome'];
// definiamo l'array arrLastNames con una lista di cognomi
const arrLastNames = ['Pallino', 'Pallo', 'Rossi', 'Cognome', 'Non so', 'Ciao'];
// defininamo l'array vuoto arrFullNames per contenere la lista dei falsi nomi degli invitati
const arrFullNames = [];
// debugger
for (let i = 0; i < arrFirstNames.length; i++) {
	// definire firstName come l'elemento in posizione i dell'array
	const firstName = arrFirstNames[i];
	// generare un numero random da 0 incluso a arrLastNames.lenght escluso e chiamarlo randIndex
	const randIndex = Math.floor(Math.random() * arrLastNames.length);
	// lastName = arrLastNames[randIndex]
	const lastName = arrLastNames[randIndex];
	// fullName = concatenare nome e cognome
	const fullName = firstName + ' ' + lastName;
	// pushare fullName in arrFullNames
	arrFullNames.push(fullName);
}

const arrFullNamesRandom = [];
const numFullNames = Math.min(arrFirstNames.length, arrLastNames.length);
for (let i = 0; i < numFullNames; i++) {
	const randFirstIndex = Math.floor(Math.random() * arrFirstNames.length);
	const randLastIndex = Math.floor(Math.random() * arrLastNames.length);
	arrFullNamesRandom.push(arrFirstNames[randFirstIndex] + ' ' + arrLastNames[randLastIndex]);
}

// stampare la lista
console.log(arrFullNames);
console.log(arrFullNamesRandom);