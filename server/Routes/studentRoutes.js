import express from "express";

import * as studentController from '../Controller/studentController.js'

const router = express.Router();

router.get('/getstudents', studentController.getStudents);

export default router;