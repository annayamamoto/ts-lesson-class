abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmplopyee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
    console.log(Department.fiscalYear);
  }

  // 抽象メソッド
  abstract describe(this: Department): void;
  // console.log(`Department(${this.id})` + this.name);

  addEmployee(employees: string) {
    // this.id = "d2";
    this.employees.push(employees);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT部門 - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Acounting");
    this.lastReport = reports[0];
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

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
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

// accounting.employees[2] = "Anna";
// accounting.name = "New Name";

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Somethig");
console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
