const APP_URL = "http://localhost:3000/employees";


async function fetchEmployees() {
    try {
        const response = await fetch(APP_URL);
        const employees = await response.json();

        renderTable(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        return [];
    }
}

function renderTable(employees) {
    const tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
        `;
        tableBody.appendChild(row);
    });
}