CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contact_num VARCHAR(15) NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other')),
    branch VARCHAR(50) NOT NULL,
    year INTEGER CHECK (year >= 1 AND year <= 5),
    password TEXT NOT NULL,
    confirm_password TEXT NOT NULL -- We'll discuss this below!
);


INSERT INTO students (name, student_id, email, contact_num, gender, branch, year, password, confirm_password)
VALUES 
('Asma P A', 'CS2026001', 'asma001@example.com', '9876543210', 'Female', 'CSE', 4, 'asma123', 'asma123'),
('Rahul Nair', 'CS2026002', 'rahul.nair@example.com', '9876543211', 'Male', 'CSE', 4, 'rahul123', 'rahul123'),
('Sneha Thomas', 'EC2026003', 'sneha.t@example.com', '9876543212', 'Female', 'ECE', 3, 'sneha123', 'sneha123'),
('Adil Mohammed', 'ME2026004', 'adil.m@example.com', '9876543213', 'Male', 'ME', 2, 'adil123', 'adil123'),
('Nandini S', 'IT2026005', 'nandini.s@example.com', '9876543214', 'Female', 'IT', 1, 'nandini123', 'nandini123'),
('Manu P', 'CE2026006', 'manu.p@example.com', '9876543215', 'Male', 'CE', 3, 'manu123', 'manu123'),
('Fathima R', 'BT2026007', 'fathima.r@example.com', '9876543216', 'Female', 'BT', 2, 'fathima123', 'fathima123'),
('Arjun R', 'EE2026008', 'arjun.r@example.com', '9876543217', 'Male', 'EEE', 4, 'arjun123', 'arjun123'),
('Divya M', 'CS2026009', 'divya.m@example.com', '9876543218', 'Female', 'CSE', 2, 'divya123', 'divya123'),
('Yusuf K', 'AI2026010', 'yusuf.k@example.com', '9876543219', 'Male', 'AI', 1, 'yusuf123', 'yusuf123');
