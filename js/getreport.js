/**
 * Calculate Salary
 */
var lib = require

var db = new lib.EmployeeStore();

db.getEmployeesByType(lib.EmployeeTypes.INTERN)
function calcSalary(noOfYears, typeOfPos) {
    var salary;
    switch (typeOfPos) {
        case "INTERN":
            salary = lib.UnitSalary.INERN;
            break;



    }
    return noOfYears * salary;
}

function viewAllReport() {
    var
            return;
}