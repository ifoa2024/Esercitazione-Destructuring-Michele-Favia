// import { sum, user }  from "./myfunction.js";

// console.log(sum(5, 5));

// console.log(user());

// const users = ['Sergio', 'Michele', 'Vincenzo', 'Carmine', 'Fabio', 'Marianna'];

// console.log(users[0]);

// const [Sergio, Michele, Vincenzo, Carmine, Fabio, Marianna] = users;

// console.log(Sergio);


// const persona = {
//     name: 'Alice',
//     age: 32,
//     city: 'New York'
// }

// console.log(persona.name);


// const { name, age, city } = persona;

// console.log(city);

// // Neted Object destructuring
// let options = {
//     size: {
//         width: 100,
//         heigth: 200
//     },
//     items: ['Cake', 'Donout'],
//     extra: true
// }

// let { size: { width, heigth }, items: [item1, item2] } = options;

// alert(width);

// // Destructuring argomenti delle funzioni
// const person = {
//     firstname: 'Nico',
//     age: 18
// }

// function printNameAge({firstname, age}) {
//     console.log(`${firstname} ha ${age} anni`);
// }

// printNameAge(person);


// function somma(a, b, c) {
//     return a + b, c;
// }

// somma(...[1, 2, 3]);

// const arr = [1, 2, 3];

// const obj = {...arr}

// console.log(obj);

// const arr1 = [5, 6, 7];
// const arr2 = [8, 9, 10];

// const newArray = [...arr1, ...arr2]

// console.log(newArray);

// const userState = {
//     name: 'Mirko',
//     email: 'mirko@gmail.com',
//     city: 'Rome'
// }

// const newUserState = {
//     ...userState,
//     age: 30
// }

// console.log(newUserState);


// Esercizio 1
// const person = {
//     name: 'Mimmo',
//     surname: 'Zalone',
//     age: 40,
// };

// // Destructuring per estrarre le proprietà name e age
// const { name, age, surname } = person;

// // Stampa delle variabili estratte
// console.log(`Nome: ${name}`); 
// console.log(`Surname: ${surname}`);   
// console.log(`Età: ${age}`); 

// // Esercizio 2
// // Array con i colori di una bandiera
// const bandiera = ['verde', 'bianco']; 

// // Destructuring con valori predefiniti
// const [colore1, colore2, colore3 = 'nero'] = bandiera;

// // Stampa dei colori 
// console.log(`Colore 1: ${colore1}`); 
// console.log(`Colore 2: ${colore2}`); 
// console.log(`Colore 3: ${colore3}`); 
// Esercizio 3
// Creazione dell'oggetto libro
const libro = {
    titolo: "Il Signore degli Anelli",
    autore: {
      nome: "J.R.R.",
      cognome: "Tolkien",
    },
    pagine: 1178,
  };
  
  // Destructuring annidato per estrarre titolo e cognome dell'autore
  const { titolo, autore: { cognome } } = libro;
  
  // Stampa dei valori estratti
  console.log(`Titolo del libro: ${titolo}`);    // Output: Titolo del libro: Il Signore degli Anelli
  console.log(`Cognome dell'autore: ${cognome}`); // Output: Cognome dell'autore: Tolkien
  

  // Esercizio 4
  
  






