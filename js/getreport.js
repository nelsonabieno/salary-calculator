/**
 * Calculate Salary
 */
function calcSalary(noOfYears, typeOfPos) {
  var salary;
  switch (typeOfPos) {
    case EmployeeTypes.INTERN:
      salary = UnitSalary.INTERN;
      break;
    case EmployeeTypes.ASSOCIATE:
      salary = UnitSalary.ASSOCIATE;
      break;
    case EmployeeTypes.MANAGER:
      salary = UnitSalary.MANAGER;
      break;
    case EmployeeTypes.EXEUTIVES:
      salary = UnitSalary.EXECUTIVES;
      break;
    case EmployeeTypes.DIRECTORS:
      salary = UnitSalary.DIRECTORS;
      break;
    default:
      alert('Invalid employee type!');
      break;
  }

  return noOfYears * salary;
}

function getEmployees() {
  return (new EmployeeStore()).store;
}