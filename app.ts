// advance types

// intersection types

type Admin={
    name:string,
    privilages:string[]
}

type Employee ={
name:string,
startDate:Date
}


type ElevatedEmployee = Admin & Employee;  // must contain all properties of admin and employee 

const intersection: ElevatedEmployee = {
name:"harshit",
privilages:["admin"],
startDate: new Date() 
}



// in property type guard

type UnkownType= Employee | Admin;

function printEmployeeInfo(emp:UnkownType){
if("privilages" in emp){
    console.log("admin");    
}

if("startDate" in emp){
    console.log("employee");
    
}
}

printEmployeeInfo(intersection)

// instanceof

class Car{
    drive(){
        console.log("driving");        
    }
}

class Truck{
    drive(){
        console.log("truck");        
    }

    loadCargo(amount:number){
console.log("cargo weight is " +" "+amount+"kg");
    }
}

type Vehicle= Car| Truck;

const v1 = new Car();
const v2= new Truck();

function useVehicle(vehicle:Vehicle){
    if(vehicle instanceof Truck)
    {
        vehicle.loadCargo(5)
    }
    console.log(vehicle.drive());
    
}

useVehicle(v2)
// useVehicle(v1)


// type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// ! means that we explicitly know this value never be null

//react
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;