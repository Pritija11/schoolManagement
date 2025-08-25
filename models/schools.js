import db from '../config/db.js';

export async function addSchool({ name, address, latitude, longitude }) {
  // Checking if the school already exists
  const [existing] = await db.query(
    "SELECT id FROM schools WHERE name = ? AND address = ?",
    [name, address]
  );

  if (existing.length > 0) {
    throw new Error("School already exists");
  }

  // adding new school
  const [result] = await db.query(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude]
  );

  return result.insertId;
}


// getting all schools

export async function getAllSchools(){
    const query = 'SELECT * FROM schools';
    const [rows] = await db.execute(query);
    return rows;
}

// calculating distance between two points 
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
}

