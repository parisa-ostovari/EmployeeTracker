const mysql = require('mysql2');
const inquirer = require('inquirer');
const connect = require('./config/connection');
const db = requite('./db');
// const cTable = require('console.table');

init();

function init() {
    mainPage();
}

function mainPage(){
    inquirer.prompt([{
        name: 'choices',
        type: 'list',
        message: 'Select an option:',
        choices: [
            'View All Departments',
            'View All Employees',
            'View Employees by Department',
            'View All Roles',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Department',
            'Add Employee',
            'Add Role',
            'Remove Department',
            'Remove Employee',
            'Remove Role',
            'Exit'
        ]
    }])
    .then(res => {
        switch(res.choice){
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'View Employees by Department':
                viewEmployeesDepartment();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Update Employee Manager':
                updateEmployeeManager();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Remove Department':
                removeDepartment();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Remove Role':
                removeRole();
                break;
            case 'Exit':
                exit();
                break;
        }
    });
}



// to end the application
function exit() {
    console.log("Ending application. Thank you.");
    process.exit();
}