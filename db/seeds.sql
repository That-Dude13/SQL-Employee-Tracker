USE employee_tracker

INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

 INSERT INTO role (title, department_id, salary)
 VALUES  ("Sales Lead", 1, 100000),
        ("Sales Person", 1, 80000),
        ("Lead Engineer", 2, 150000),
        ("Software Engineer", 2, 120000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3, 125000), 
        ("Legal Team Lead", 4, 250000),
        ("Lawyer", 4, 190000);

    
INSERT INTO employee (first_name, last_name, role_id, department_id, salary, manager_id)
VALUES  ("John", "Doe", "Sales Lead", "Sales", 100000, null),
        ("Mike", "Chan", "Sales person", "Sales", 100000, "John Doe" ),
        ("Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, null),
        ("Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez"),
        ("Kunal", "Singh", "Account Manager", "Fianace", 160000, null),
        ("Malia", "Brown", "Accountant", "Fianace", 125000, "Kunal Singh"),
        ("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, null),
        ("Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd");
        
