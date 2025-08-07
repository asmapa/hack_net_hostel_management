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