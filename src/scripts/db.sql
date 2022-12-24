CREATE DATABASE IF NOT EXISTS tasksdb;
USE tasksdb;
CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

INSERT INTO tasks  (title,description) VALUES 
('tarea1','descripcion tarea 1'),
('tarea2','descripcion tarea 2'),
('tarea3','descripcion tarea 3');