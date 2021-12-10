
// 1. Formas de variables
var myString: string;
// Se puede adignar variables de esta forma
myString = "Bee stinger";

myString = "9"; //No se puede enviar un numero.



function sayHello(name: string){
   return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));

console.log(sayHello("9"));//La funcion espera una string


// 3. Optional
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}

console.log(fullName("Mary", "Moore", "Tyler"));

console.log(fullName("Jimbo", "Jones", "Jameson")); //La funcion espera un tercer valor

// 4. iNTERFACES Y FUNCIONES
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4 //Se perdio una "s"
}

console.log(graduate(christine));

console.log(graduate(jay));


// 5. Clases y funciones
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}

const shane = new Ninja("Shane", "Salazar");
const turing = new Ninja("Alan", "Turing"); 

function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

console.log(study(shane));


// 6. Funciones arrow
var increment = (x:number) => x + 1;
:
console.log(increment(3));
var square = (x:number) => {x * x};

console.log(square(4));

var multiply = (x:number,y:number) => x * y;

var math = (x:number, y:number) => {
   let sum = x + y;
    let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}



class Elephant {
   constructor(public age: number){}
   birthday = () =>{//Borrar la funcion y agregar un arrow
      this.age++; 

   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)