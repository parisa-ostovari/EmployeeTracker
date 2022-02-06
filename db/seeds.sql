use employee_db;

INSERT INTO department(name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Marketing'),
    ('Sales');

INSERT INTO role(title, salary, department_id)
VALUES
    ('Accountant', 125000, 3),
    ('Account Manager', 160000, 3),
    ('Lawyer', 190000, 4);
    ('Lead Engineer', 150000, 2),
    ('Legal Team Lead', 250000, 4),
    ('Salesperson', 80000, 1),
    ('Sales Lead', 100000, 1),
    ('Software Engineer', 120000, 2),

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
    ('Ashley', 'Rodriguez', 1, NULL),
    ('John', 'Doe', 2, NULL),
    ('Kevin', 'Tupik', 3, 3),
    ('Kunal', 'Singh', 4, NULL),
    ('Malia', 'Brown', 5, 5),
    ('Mike', 'Chan', 6, 1),
    ('Sarah', 'Lourd', 7, 3),
    ('Tom', 'Allen', 8, 7);
