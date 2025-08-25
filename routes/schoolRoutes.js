import express from 'express';
import { createSchool, fetchAllSchools } from '../controllers/schoolController.js';
import { validateSchool } from '../middlewares/validateSchool.js';
import { validateLocation } from '../middlewares/validateLocation.js';

const router = express.Router();

router.post('/addSchool', validateSchool, createSchool);
router.get('/listSchools', validateLocation, fetchAllSchools);

export default router;
