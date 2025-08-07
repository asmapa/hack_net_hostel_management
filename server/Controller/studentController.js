import * as studentServices from "../Services/studentServices.js"

export const getStudents = async (req, res) => {
    try {
        const clients = await studentServices.getStudents();
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
    }
}

export const createStudent = async (req, res) => {
    try {
        const StudentData = await req.body;
        const newStudent = await studentServices.createStudent(StudentData);
        res.status(200).json(newStudent);
        console.log("Student data enterd successfully!!!!!!!");
        
    } catch (err) {
        console.error('Error inserting student:', err);
    }
}


export const LoginCheck = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required!" });
        }

        const student = await studentServices.loginCheck(email, password);

        if (student) {
            console.log("✅ Login successful for:", email);
            res.status(200).json({ message: "Login successful", student });
        } else {
            console.log("❌ Invalid login attempt for:", email);
            res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (err) {
        console.error("😵 Error during login check:", err);
        res.status(500).json({ message: "Server error during login" });
    }
};


