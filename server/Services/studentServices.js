import { query } from "../db.js"


export const getStudents = async () => {
    const { rows } = await query('select * from students');
    return rows;
}