class Employee {
  static #allEmployees = [];
  #salary;
  #isHired = true;
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    Employee.#allEmployees.push(this);
  }
  static getEmployees() {
    return Employee.#allEmployees;
  }
  static getTotalPayroll() {
    return Employee.#allEmployees.reduce(
      (total, employee) => total + employee.#salary,
      0
    );
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else {
      this.#isHired = false;
    }
  }
}

module.exports = {
  Employee,
};
