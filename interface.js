"use strict";
let user;
user = {
    name: "harshit",
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
};
user.greet("hi");
// user.name="l"  error because its a readonly property
// interface with classes
class Person {
    // name: string;
    // constructor( n:string){
    // this.name=n
    // }
    //we can also have optional constructor property
    // constructor( public age:number,public name?:string){}
    // we can also set default value in constructor
    constructor(age, name = "abc") {
        this.age = age;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name + " " + "your age is" + " " + this.age);
    }
}
let user2;
user2 = new Person(1, "K");
user2.greet("hey");
const p = new Person(25, "harshit");
p.greet("hii");
let addd;
addd = (n1, n2) => {
    return n1 + n2;
};
console.log(addd(2, 3));
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const error = {
    email: "hahahha"
    // email:111 error 
};
