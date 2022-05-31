class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department:` + this.name);
  }

  addEmployee(employees: string) {
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

// accounting.employees[2] = "Anna";
accounting.name = "New Name";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
