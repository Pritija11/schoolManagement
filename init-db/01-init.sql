-- Create the schools table
CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert some sample data (optional)
INSERT INTO schools (name, address, latitude, longitude) VALUES
('Springfield Elementary School', '742 Evergreen Terrace, Springfield', 39.7817, -89.6501),
('Shelbyville High School', '123 Main St, Shelbyville', 39.4061, -88.7906),
('Capital City Academy', '456 State St, Capital City', 39.1991, -89.0853);

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON school_db.* TO 'pritija_user'@'%';
FLUSH PRIVILEGES;
