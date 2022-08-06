interface Named{
    readonly name:string
    outputName?:string // optional property
}

interface Greeting extends Named{ // use to define structure of object
    greet(phrase:string):void
}

let user:Greeting;

user={
    name:"harshit",
    greet(phrase){
        console.log(phrase+" "+this.name);        
    },
}

user.greet("hi")
// user.name="l"  error because its a readonly property


// interface with classes

class Person implements Greeting{

// name: string;
// constructor( n:string){
// this.name=n
// }

//we can also have optional constructor property
// constructor( public age:number,public name?:string){}

// we can also set default value in constructor

constructor( public age:number,public name:string="abc"){}



greet(phrase:string){
    console.log(phrase+" "+this.name +" "+ "your age is" +" "+ this.age);        
}
}


let user2:Greeting;

user2= new Person(1,"K")
user2.greet("hey")

const p = new Person(25,"harshit");

p.greet("hii")



// -------------------------------------

// interface for function

interface Fun{
    (a:number,b:number):number  // (parameter1,parameter2):returntype
}

let addd:Fun;

addd=(n1:number,n2:number)=>{
    return n1 + n2;
}

console.log(
    addd(2,3)

);





interface Bird {
    type: 'bird';
    flyingSpeed: number;
  }
  
  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }
  
  type Animal = Bird | Horse;
  
  function moveAnimal(animal: Animal) {
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
  
  moveAnimal({type: 'bird', flyingSpeed: 10});



  // error contsainer

  interface ErrorContainer {
    [prop:string]:string // propert and value both must be string
  }

  const error:ErrorContainer = {
    email:"hahahha"
    // email:111 error 
  }