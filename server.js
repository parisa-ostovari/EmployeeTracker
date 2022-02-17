const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require('./db');
require('console.table');

init();

function init() {
    mainPage();
}

function mainPage() {
    inquirer.prompt([{
        name: 'choices',
        type: 'list',
        message: 'Select an option:',
        choices: [
            'View All Departments',
            'View All Employees',
            'View All Roles',
            'Update Employee Role',
            'Add Department',
            'Add Employee',
            'Add Role',
            'Exit'
        ]
    }])
        .then(res => {
            switch (res.choices) {
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                default:
                    process.exit();
            }
        });
}


function viewAllDepartments() {
    db.getDepartments().then(([depts]) => {
        console.table(depts)
    }).then(() => mainPage())
}

function viewRoles(){
    db.getRoles().then(([roles]) => {
        console.table(roles)
    }).then(() => mainPage())
}
function viewAllEmployees(){
    db.getEmployees().then(([emp]) => {
        console.table(emp)
    }).then(() => mainPage())
}    

function addEmployee(){
    
    db.getRoles().then(([roles])=>{
        const roleChoices =  roles.map(({id, title})=>({
            name: title,
            value: id
        }))

        inquirer.prompt([
            {
                type: 'input', 
                name: 'first', 
                message: 'what is the first name'
            }, 
            {
                type: 'input', 
                name: 'last', 
                message: 'what is the last name'
            }, 
            {
                type: 'list',
                name: ' roles', 
                message: 'what is the employees role?',
                choices: roleChoices
            }
        ]).then((res)=>{
            const firstName= res.first;
            const lastName =  res.last;
            const role = res.roles

            db.getEmployees().then(([emps])=>{
                const employeeChoices =  emps.map(({id, first_name, last_name})=>({
                    name: `${first_name} ${last_name}`, 
                    value: id
                }))

                employeeChoices.unshift({name: 'None', value: null})

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'manager_id',
                        message: 'Who is this employees manager?', 
                        choices: employeeChoices
                    }
                ]).then((data)=>{
                    let employee = {
                        first_name: firstName,
                        last_name: lastName, 
                        role_id: role, 
                        manager_id: data.manager_id
                    }

                    db.createEmployee(employee)
                }).then(()=> mainPage())

            })
        })



    })
}