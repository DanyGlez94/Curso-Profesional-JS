import { setTimeout } from "core-js";

interface Observer { //Definimos Observer
    update: (data: any) => void; //Los observer van a recibir actualizaciones, por eso necesita el método update, el cuál recibe datos, cualquiera y no regresa nada, por eso es void
}

interface Subject { //Definimos la interfaz de Subject, quienes tendrán 2 funciones subscribe y unsubscribe
    subscribe: (observer: Observer) => void; //Función que recibe un observer, de tipo observer, y no nos regresa nada
    unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject { //Creamos la clase Bitcoin, la cuál implementa la interfaz de subject
    observers: Observer[] = []; //Creamos la lista observers, la cual va a comenzar vacía, y es un arreglo de tipo Observer

    constructor() {
        const el:HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => { //Cuando value cambie su valor, notificamos a todos los observers
            this.notify(el.value)
        });
    }

    subscribe (observer: Observer) { //Añade a la lista de suscriptores observers
        this.observers.push(observer) //Usamos push para añadir al observer al arreglo observers
    }

    unsubscribe (observer: Observer) { //Elimina de la lista observer
        const index = this.observers.findIndex(obs => { //Encontramos en qué índice del arreglo observer se encuentra
            return obs === observer //si obs === observer, findIndex va a regresar la posición donde se encuentra el observer
        })

        this.observers.splice(index, 1);//Con splice, a partir de index, quiero sacar solo un elemento
    }

    notify(data: any) { //Cuando el precio cambie, hay que notificar a todos los suscriptores
        this.observers.forEach(observer => observer.update(data)); 
    }
}

class PriceDisplay implements Observer { 
    private el: HTMLElement; //Declaramos el tipo de elemento

    constructor() {
        this.el = document.querySelector("#price") //Indicamos el selector de 'el' para poderlo manipular
    }

    update(data: any) {
        this.el.innerText = data; //Cada vez que se llame update, el valor de 'el' va a cambiar y va a ser igual a lo que llegue como dato
    }
}

const value = new BitcoinPrice(); //Creamos instancias para poder suscribirlas
const display = new PriceDisplay(); 

value.subscribe(display); //Suscribimos a display a los cambios de value

setTimeout(() => value.unsubscribe(display), 5000); //Se desuscribe después de 5 segundos