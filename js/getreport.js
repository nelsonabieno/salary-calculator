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
            salary = lib.UnitSalary.INTERN;
            break;
        case "ASSOCIATE":
            salary = lib.UnitSalary.ASSOCIATE;
            break;
                    case "MANAGER":
            salary = lib.UnitSalary.MANAGER;
            break;
                    case "EXEUTIVES":
            salary = lib.UnitSalary.EXECUTIVES;
            break;
            
                    case "DIRECTORS":
            salary = lib.UnitSalary.DIRECTORS;
            break;


    }
    return noOfYears * salary;
}

function viewAllReport() {
    var
            return;
}