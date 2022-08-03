
// function return types

function add(n1,n2) :number {  // we explicitly define return type of this 
    // function is number we also have void return type if we don't retuen anything then the return type will be void
    // we also have undefined as a return type
    return  n1 + n2
}

console.log(add(2,"2"));
 

// example void return type

function add2(n1,n2) :void { 
    console.log( n1 + n2);
}


// undefined return type

function add3(n1,n2) :undefined { 
    console.log( n1 + n2);
    return;
}


// restrict function return type

let funType : (a:number,b:number) => number;
//  here typescript telling the varible will store a function with two number parametet and also return a number type

function add4(n1,n2) {      
    return  n1 + n2
}
function strng(str) {      
    return  str
}

funType = add4(1,2)
// or
funType = add4

funType = strng

console.log(funType(3,2));
// console.log(funType("hahahah","wswss")); // error

// callbacks

function callback (a:number,b:number,cb:(num:number)=>void){
const result =a+b;
cb(result)
}

callback(2,3,(res)=>console.log(res))


// never type  : never returns anything foe example for loop or error boundaries


function err(msg:string,code:number):never{
    throw {message:msg, statusCode:code}
}




