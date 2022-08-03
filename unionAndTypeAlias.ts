// union (OR): giver us a flexibilitity to choose datatypes.
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.


function combine(param1:number|string,param2:number|string){
    if(typeof param1 === "number" && typeof param2=== "number"){
        console.log(param1+param2);    
    } else {
        console.log(param1.toString() + param2.toString());    
    }
    }
    
    combine(2,3)
    combine("har","shit")
    
    
    function printStatusCode(code: string | number) {
        console.log(`My status code is ${code}.`)
      }
      printStatusCode(404);
      printStatusCode('404');
    
    
    //   type alias for example using same union multiple can be messy and long code.
    
    type Combinable = number | string;
    
    function combine2(param1:Combinable,param2:Combinable) {
        if(typeof param1 === "number" && typeof param2=== "number"){
            console.log(param1+param2);    
        } else {
            console.log(param1.toString() + param2.toString());    
        }
        }
        
    combine2(2,3)
    combine2("har","shit")
    