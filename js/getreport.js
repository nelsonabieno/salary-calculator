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

function handleSalaryBtn () {
  var level = document.getElementById('level').value;
  var years = document.getElementById('years').value;

  if (level && salary) {
    var salary = calcSalary(years, level);
    alert('Salary: ' + salary);
  } else {
    alert('All fields are required!');
  }

}

function handleReportBtn (){
  var employees = getEmployees();
  var count = 0;
  var reportDiv = document.getElementById('reportDiv');
  var html = '<table class="table table‐bordered table‐hover">';
  html += '<thead><tr><td>S/N</td><td>First Name</td><td>Surname</td>';
  html += '<td>Level</td><td>Years</td><td>Salary</td></tr></thead><tbody>';

  employees.forEach(function(emp, idx){
  html += count % 2 === 0 ? '<tr class="info">' : '<tr>';

  count++;

  html += '<td>' + count + '</td>';
  html += '<td>' + emp.firstName + '</td>';
  html += '<td>' + emp.lastName + '</td>';
  html += '<td>' + emp.type + '</td>';
  html += '<td>' + emp.years + '</td>';
  html += '<td>' + calcSalary(emp.years, emp.type) + '</td></tr>';
  });
  
  html += '</tbody></table>';
  reportDiv.innerHTML = html;
}