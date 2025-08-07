import express from "express";

import * as studentController from '../Controller/studentController.js'

const router = express.Router();

router.get('/getstudents', studentController.getStudents);
router.post('/insertStudent', studentController.createStudent);

export default router;