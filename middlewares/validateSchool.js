export function validateSchool(req, res, next) {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      error: "Invalid school data. Name, address, latitude, and longitude are required."
    });
  }

  // Convert latitude and longitude to numbers
  const latNum = parseFloat(latitude);
  const lonNum = parseFloat(longitude);

  if (isNaN(latNum) || isNaN(lonNum)) {
    return res.status(400).json({ 
      error: "Latitude and longitude must be valid numbers."
    });
  }

  req.body.latitude = latNum;
  req.body.longitude = lonNum;

  next();
}
