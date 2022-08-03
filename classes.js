"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name:string;
        // private readonly id:string;  readonly used when we dont have to chage the 
        // value after initialisation for eg id must only be initialised once and its value never be changed
        this.employees = [];
        // this.name=n
    }
    static createEmployee(text) {
        return { name: text };
    }
    describe() {
        console.log("department" + " " + this.name + " " + this.id);
    }
    addEmploye(employe) {
        this.employees.push(employe);
    }
    printInfo() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    printAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("no report found");
        }
    }
    set recentReport(value) {
        this.addReport(value);
    }
    addEmploye(name) {
        if (name === "harshit") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const staticCheck = Department.createEmployee("bro");
console.log(staticCheck);
const accounting = new AccountingDepartment("qq", []);
accounting.recentReport = "setter report";
accounting.addReport("new report");
accounting.addReport("2 report");
console.log(accounting.recentReport);
accounting.printReports();
accounting.addEmploye("harshit");
accounting.addEmploye("jain");
accounting.addEmploye("chandan");
// accounting.employees[4]="nnn" not accisble due to private property
accounting.describe();
accounting.printInfo();
// const acc = {name:"bro",describ:accounting.describe}
// acc.describ()
