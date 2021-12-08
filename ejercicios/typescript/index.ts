//Bolean
let muted: boolean = true;
muted = false;

//Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre:string = "Daniel";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ['Daniela, Ely, Bárbara'];
//people.push(9000) Esto nos da error, porque es un array de tipo string, no podemos asignar números.

let peopleAndNumbers: Array < string | number > = []; //Aquí indicamos que el arreglo puede contener strings y números.
peopleAndNumbers.push('Lexi');
peopleAndNumbers.push(100);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);


//Any 
let comodin: any = "Joker";
comodin = {type: "Wildcard"};

//Object
let someObject: object = {type: "Wildcard"};

//Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6);

function createAdder (a: number): (number) => number {
    return function(b: number) {
        return b + a;
    };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName?: string): string { //Si queremos que un parámetro sea opcional,tenemos que agregar el '?' antes de ':'
function fullName(firstName: string, lastName: string = 'Glez'): string { // Si queremos un valor por omisión, se define así (nombreVariable: tipoDato = valor) ejemplo lastName: string = 'Glez'
    return `${firstName} ${lastName}`;
}

const danielGonzalez = fullName('Daniel');
console.log(danielGonzalez);

//Interfaces: nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color; //Aquí indiqué que la propiedad color es opcional
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul,
}

function area(r: Rectangulo) { //en esta función indiqué que r es de tipo Rectángulo
    return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`
}

console.log(rect.toString());
