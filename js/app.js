const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName('h1');

let myH3 = myDoc.getElementById('mySuperH3');

console.log(myH1);
console.log(myH3);

myH3.innerHTML = 'Estoy modificando el texto de h3';
// myH3.innerHTML = "<button>Esto es un botón</button>";

const myButtonStr = "<button>Esto es un botón</button></br>";

myH3.innerHTML = myButtonStr;

// While, do while, for, for in, for of, for each

const cant_elements = 10;

for (let index = 0; index < cant_elements; index++) {
    myH3.innerHTML += myButtonStr;
}

// const myObj = {
//     "atributo" : "valor"
// }

// const myObjeto2 = {
//     atributo: "valor",
//     atributo2: "valor2",
// }