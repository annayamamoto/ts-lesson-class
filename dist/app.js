"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department:` + this.name);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Acounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.name = "New Name";
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map