/**
 * Calculate Salary
 */
function calcSalary(noOfYears, typeOfPos) {
  var salary;
  switch (typeOfPos) {
    case "1":
      salary = UnitSalary.INTERN;
      break;
    case "2":
      salary = UnitSalary.ASSOCIATE;
      break;
    case "3":
      salary = UnitSalary.MANAGER;
      break;
    case "4":
      salary = UnitSalary.EXECUTIVE;
      break;
    case "5":
      salary = UnitSalary.DIRECTOR;
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

  if (level && years) {
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
  html += '<td>' + emp.getLevel() + '</td>';
  html += '<td>' + emp.years + '</td>';
  html += '<td>' + calcSalary(emp.years, String (emp.type)) + '</td></tr>';
  });
  
  html += '</tbody></table>';
  reportDiv.innerHTML = html;
}