CREATE DATABASE IF NOT EXISTS taskdb;
use taskdb;
CREATE TABLE IF NOT EXISTS task(
    id INT NOT NULL AUTO_INCREMENT,
    tittle VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);
INSERT INTO task(tittle, description) VALUES
('task1','some description'),
('task2','some description');