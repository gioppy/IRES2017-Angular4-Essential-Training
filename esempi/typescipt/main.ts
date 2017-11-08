let a: number = 10;
let b: string = 'Pippo';

console.log(a);
console.log(b);

let log = (msg: string = 'This is a test'): void => console.log(msg);

function sum(a: number, b: number): number {
  return a + b;
}

/**
 * La funzione fa un log di stringhe
 * @param {string} msg
 *    la stringa principale
 * @param {string} other
 *    l'array di stringhe aggiuntive
 */
function biggerLog(msg: string = 'This is a test', ...other: string[]) {
  console.log(`${msg}
  ${other.join(' ')}`);
}

log('Hello!');
log();

biggerLog('Hello', 'a', 'b', 'c', '2');

let c: any = 3;
c = 'pippo';

// let d: number[] = [1, 2, 3];
let d: Array<number> = [1, 2, 3];
let e: string[] = ['a', 'b', 'c'];

let de: Array<number|string> = [...d, ...e];

let [first, second] = d;
console.log(first);
console.log(second);

const person = {
  firstname: 'Pippo',
  lastname: 'Pluto'
};

let {firstname, lastname} = person;
console.log(firstname);
console.log(lastname);

interface Greet {
  greet(): string;
}

class Person implements Greet {
  firstname: string;
  lastname: string;
  private age: number = 10;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHi(): string {
    return `Hi ${this.firstname}`;
  }

  greet(): string {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}

let pippo: Person = new Person('Pippo', 'Pluto');
console.log(pippo.sayHi());
// Errore!
// console.log(pippo.age);

interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
  street?: string;
}

let pluto: IPerson = {
  firstname: 'Pluto',
  lastname: 'Pluto',
  age: 10,
  street: 'ppp'
};

let paperino: IPerson = {
  firstname: 'Paperino',
  lastname: 'Paperino',
  age: 10
};
