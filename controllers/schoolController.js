
import { addSchool, getAllSchools, calculateDistance } from "../models/schools.js";

//  add a new school
export async function createSchool(req, res) {
  try {
    const result = await addSchool(req.body);
    res.status(201).json({ message: "School added successfully!", id: result });
  } catch (err) {
    if (err.message === "School already exists") {
      return res.status(400).json({ message: err.message });
    }
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}


// get all schools
export async function fetchAllSchools(req, res) {

    const { latitude, longitude } = req.query;
    try {
        let schools = await getAllSchools();
        if (latitude && longitude) {
            schools = schools.map(school => ({
                ...school,
                distance: calculateDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude)
            }))
            .sort((a, b) => a.distance - b.distance);
        }
        res.json(schools);
    } catch (error) {
        console.error('Error fetching schools:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}