let persons = [];
let salaries = [];

function init() {
    document.getElementById('employeeDropdown').focus();
    addInputRestrictions();
}

function addSalary() {
    let employeeName = document.getElementById('employeeDropdown').value;
    let salary = document.getElementById('salaryInput').value;

    if (salary === '' || isNaN(salary)) {
        alert('Please enter a valid numeric salary');
        return;
    }

    persons.push(employeeName);
    salaries.push(parseFloat(salary));

    document.getElementById('salaryInput').value = '';
    document.getElementById('employeeDropdown').focus();
}

function displayResults() {
    if (salaries.length === 0) {
        alert('No salaries to display');
        return;
    }

    let sum = salaries.reduce((a, b) => a + b, 0);
    let average = sum / salaries.length;
    let highest = Math.max(...salaries);

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results</h2>
                            <p>Average Salary: ${average.toFixed(2)}</p>
                            <p>Highest Salary: ${highest.toFixed(2)}</p>`;
}

function displaySalary() {
    if (persons.length === 0) {
        alert('No salaries to display');
        return;
    }

    let table = '<h2>Salaries</h2>';
    table += '<table border="1"><tr><th>Employee</th><th>Salary</th></tr>';

    for (let i = 0; i < persons.length; i++) {
        table += `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
    }

    table += '</table>';
    document.getElementById('results_table').innerHTML = table;
}

function addInputRestrictions() {
    document.getElementById('salaryInput').addEventListener('keydown', function(event) {
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', '.', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
        const ctrlCmd = event.ctrlKey === true || event.metaKey === true;
    
        if (allowedKeys.includes(event.key) ||
            (['a', 'c', 'x'].includes(event.key.toLowerCase()) && ctrlCmd)) {
            return; 
        }
    
        if ((event.key < '0' || event.key > '9') || 
            (event.shiftKey && !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key))) {
            event.preventDefault();
        }
    });
}

window.onload = init;
