export function validateLocation(req, res, next) {
  const { latitude, longitude } = req.query;

  if (latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      error: "User latitude and longitude are required as query parameters."
    });
  }

  const latNum = parseFloat(latitude);
  const lonNum = parseFloat(longitude);

  if (isNaN(latNum) || isNaN(lonNum)) {
    return res.status(400).json({
      error: "Latitude and longitude must be valid numbers."
    });
  }

  req.query.latitude = latNum;
  req.query.longitude = lonNum;

  next();
}
