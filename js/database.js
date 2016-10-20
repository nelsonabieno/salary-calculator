'use strict';

var EmployeeTypes = {
    INTERN: 1,
    ASSOCIATE: 2,
    MANAGER: 3,
    EXECUTIVE: 4,
    DIRECTOR: 5
};

var UnitSalary = {
    INTERN: 5000,
    ASSOCIATE: 10000,
    MANAGER: 15000,
    EXECUTIVE: 20000,
    DIRECTOR: 25000
};

/**
 * Employee class constructor
 **/
function Employee (empType, sex, firstName, lastName, yearsExp){
    this.type = empType;
    this.sex = sex;
    this.lastName = lastName;
    this.years = yearsExp;
}


Employee.prototype.getUnitSalary = function (){
    var baseSalary;

    switch (this.type) {
    case EmployeeTypes.INTERN:
        baseSalary = 5000;
        break;
    case EmployeeTypes.ASSOCIATE:
        baseSalary = 10000;
        break;
    case EmployeeTypes.MANAGER:
        baseSalary = 15000;
        break;
    case EmployeeTypes.EXECUTIVE:
        baseSalary = 20000;
        break;
    case EmployeeTypes.DIRECTOR:
        baseSalary = 25000;
        break;
    default:
        throw new Error('Invalid Employee Type');
    }

    return baseSalary;
}

/**
 * Employee Database
 **/
function EmployeeStore (){
    this.store = [
        new Employee(EmployeeTypes.INTERN, 'female', 'Cynthia', 'Morgan'),
        new Employee(EmployeeTypes.ASSOCIATE, 'male', 'Jack', 'Sparrow'),
        new Employee(EmployeeTypes.DIRECTOR, 'female', 'Maryam', 'Coleman'),
        new Employee(EmployeeTypes.EXECUTIVE, 'male', 'Philip', 'Freeman'),
        new Employee(EmployeeTypes.INTERN, 'male', 'Arthur', 'Manager'),
        new Employee(EmployeeTypes.INTERN, 'male', 'John', 'Black'),
    ];
}

/**
 * Add new employee to the store
 **/
EmployeeStore.prototype.add = function(employee) {
    if (!(employee instanceof Employee)) {
        throw new TypeError('Employee must be an instance of class Employee');
    }

    this.store.push(employee);
}

/**
 * Retrieve all employees of a particular type
 **/
EmployeeStore.prototype.findEmployeesByType =  function (empType) {
    return this.store.filter(function (emp){emp.type===empType});
}

module.exports = {
    Employee: Employee,
    EmployeeTypes: EmployeeTypes,
    UnitSalary: UnitSalary
};
