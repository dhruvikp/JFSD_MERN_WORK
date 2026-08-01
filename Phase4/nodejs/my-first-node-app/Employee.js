class Employee {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Employee name is ${this.name}`);
    }
}

module.exports = Employee;