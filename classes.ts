 class Department{
    // name:string;
    // private readonly id:string;  readonly used when we dont have to chage the 
    // value after initialisation for eg id must only be initialised once and its value never be changed
    protected employees :string[]=[]

    constructor( private readonly id:string, public name:string){
        // this.name=n
    }

    static createEmployee(text:string){  // static property directly be called on Class there's no need to create instance
        return {name:text}
    }

    describe(){
        console.log("department" +" "+ this.name + " " + this.id);        
    }

    addEmploye(employe:string){
        this.employees.push(employe)
    }

    printInfo(){
        console.log(this.employees);        
    }
}


class ITDepartment extends Department{
    admins:string[];

    constructor(id:string,admins:string[]){
        super(id,"IT")
        this.admins=admins
    }
    printAdmins(){
        console.log(this.admins);        
    }
}

class AccountingDepartment extends Department{

    private lastReport:string;

    constructor(id:string, private reports:string[]){
        super(id,"Accounting")
        this.lastReport=reports[0]
    }

    get recentReport(){
        if(this.lastReport){
            return this.lastReport
        } 
        else{
            throw new Error("no report found")
        }
    }

    set recentReport(value:string){
        this.addReport(value)
    }



    addEmploye(name:string){
        if(name==="harshit"){
            return
        }
        this.employees.push(name)
    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport=text
    }

    printReports(){
        console.log(this.reports);        
    }
}

const staticCheck = Department.createEmployee("bro")
console.log(staticCheck);


const accounting = new AccountingDepartment("qq",[]);

accounting.recentReport="setter report"

accounting.addReport("new report")
accounting.addReport("2 report")

console.log(accounting.recentReport);

accounting.printReports()

accounting.addEmploye("harshit");
accounting.addEmploye("jain");
accounting.addEmploye("chandan");

// accounting.employees[4]="nnn" not accisble due to private property

accounting.describe();

accounting.printInfo()

// const acc = {name:"bro",describ:accounting.describe}

// acc.describ()
