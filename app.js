"use strict";
// advance types
const intersection = {
    name: "harshit",
    privilages: ["admin"],
    startDate: new Date()
};
function printEmployeeInfo(emp) {
    if ("privilages" in emp) {
        console.log("admin");
    }
    if ("startDate" in emp) {
        console.log("employee");
    }
}
printEmployeeInfo(intersection);
// instanceof
class Car {
    drive() {
        console.log("driving");
    }
}
class Truck {
    drive() {
        console.log("truck");
    }
    loadCargo(amount) {
        console.log("cargo weight is " + " " + amount + "kg");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
    console.log(vehicle.drive());
}
useVehicle(v2);
// useVehicle(v1)
// type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// ! means that we explicitly know this value never be null
//react
const userInputElement = document.getElementById('user-input');
