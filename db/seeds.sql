INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal"),

INSERT INTO role (id, title, department_id, salary)
VALUES  (1, "Sales Lead", "Sales", 100000),
        (2, "Sales Person", "Sales", 80000),
        (3, "Lead Engineer", "Engineering", 150000),
        (4, "Software Engineer", "Engineering", 120000),
        (5, "Account Manager", "Fianace", 160000), 
        (6, "Accountant", "Fianance", 125000),  
        (7, "Legal Team Lead", "Legal", 250000),
        (8, "Lawyer", "Legal", 190000), 
    
INSERT INTO employee (id, first_name, last_name, title, department, salary, manager_id)
VALUES  (1, "John", "Doe", "Sales Lead", "Sales", 100000, null),
        (2, "Mike", "Chan", "Salesperson", "Sales", 100000, "John Doe" ),
        (3, "Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, null),
        (4, "Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez"),
        (5, "Kunal", "Singh", "Account Manager", "Fianace", 160000, null),
        (6, "Malia", "Brown", "Accountant", "Fianace", 125000, "Kunal Singh"),
        (7, "Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, null),
        (8, "Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd"),
        
