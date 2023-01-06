CREATE DATABASE IF NOT EXISTS materiales_db;
USE materiales_db;
CREATE TABLE IF NOT EXISTS materiales(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    descripcion TEXT,
    espesor VARCHAR (100),
    longitud_ancho DOUBLE,
    longitud_largo DOUBLE,
    calidad_material BOOL,
    costo_total DOUBLE,
    costo_m2 DOUBLE,
    costo_ml DOUBLE,
    cantidad INT,
    PRIMARY KEY(id)
);

INSERT INTO materiales  (nombre, descripcion, espesor, longitud_ancho, longitud_largo, calidad_material, costo_total, costo_m2, costo_ml) VALUES 
('PVC','PVC de 10 mm de buena calidad','10mm','2','3','1','200','33.3','66.6','1'),
('PVC','PVC de 5 mm de buena calidad','5mm','1.22','2.44','1','100','33.6','40.98','1'),
('PVC','PVC de 3 mm de mala calidad','3mm','2','3','0','30.5','10.2','12.5','1');