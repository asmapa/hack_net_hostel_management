import { query } from "../db.js"


export const getStudents = async () => {
    const { rows } = await query('select * from students');
    return rows;
}

export const createStudent = async (studentData) => {
    const {
        name,
        student_id,
        email,
        contact_num,
        gender,
        branch,
        year,
        password,
        confirm_password,
    } = studentData;

    const { rows } = await query(
        `INSERT INTO students 
      (name, student_id, email, contact_num, gender, branch, year, password, confirm_password)
     VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING *`,
        [
            name,
            student_id,
            email,
            contact_num,
            gender,
            branch,
            year,
            password,
            confirm_password,
        ]
    );

    return rows[0]; 
};

