"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmplopyee(name) {
        return { name: name };
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT部門 - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Acounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("会計部門 - ID:" + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const emloyee1 = Department.createEmplopyee("an");
console.log(emloyee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Somethig");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Manu");
accounting.describe();
//# sourceMappingURL=app.js.map