import * as studentServices from "../Services/studentServices.js"

export const getStudents = async (req, res) => {
    try {
        const clients = await studentServices.getStudents();
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
    }
}