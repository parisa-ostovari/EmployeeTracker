use employee_db;

INSERT INTO department(name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role(title, salary, department_id)
VALUES
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Lawyer', 190000, 3),
    ('Legal Team Lead', 250000, 3),
    ('Sales Manager', 80000, 4),
    ('Sales Person', 100000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Ashley', 'Rodriguez', 1, NULL),
    ('John', 'Doe', 2, 1),
    ('Kevin', 'Tupik', 3, NULL),
    ('Kunal', 'Singh', 4, 3),
    ('Malia', 'Brown', 5, NULL),
    ('Mike', 'Chan', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);
