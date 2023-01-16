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




CREATE DATABASE IF NOT EXISTS TrabajosRealizados_db;
USE TrabajosRealizados_db;
CREATE TABLE IF NOT EXISTS TrabajosRealizados(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    descripcion TEXT,
    precio DOUBLE,
    fecha DATETIME,
    otros_gastos_descripcion TEXT,
    costo_otros_gastos DOUBLE,
    impuesto_representacion DOUBLE,
    impuesto_onat DOUBLE,
    impuesto_equipos DOUBLE,
    costo_total DOUBLE,
    utilidad DOUBLE,
    PRIMARY KEY(id)
);

INSERT INTO TrabajosRealizados  (nombre, descripcion, precio, fecha, otros_gastos_descripcion, costo_otros_gastos, impuesto_representacion, impuesto_onat, impuesto_equipos, costo_total, utilidad) VALUES 
('Tunel del Tiempo', 'Tunel de pvc de varios espesores suspendido en el aire', '10000', '2017-12-20', 'pago a masilleros', '560', '100', '200', '10', '2500', '2000'),
('Museo del Automovil', 'Realizacion del local para el carro donado a Leal', '15000', '2018-12-20', 'pago a herreros', '1000', '150', '220', '110', '2700', '2700');

CREATE TABLE IF NOT EXISTS MaterialesTrabajosRealizados(
    id_orden INT,
    nombre VARCHAR (100) NOT NULL,
    descripcion TEXT,
    medida_largo DOUBLE,
    medida_ancho DOUBLE,
    precio_largo DOUBLE,
    precio_m2 DOUBLE,
    precio_total DOUBLE
);

INSERT INTO MaterialesTrabajosRealizados  (id_orden, nombre, descripcion, medida_largo, medida_ancho, precio_largo, precio_m2, precio_total) VALUES 
('1', 'PVC', 'pvc de 10mm', '2.44', '1.22', '15', '25', '55'),
('1', 'ACRILICO', 'acrilico de 10mm', '2.44', '1.22', '55', '35', '85'),
('1', 'vinilo', 'vinilo blanco de impresion', '10', '1.35', '15', '25', '15'),
('2', 'ACRILICO', 'acrilico de 10mm', '2.44', '1.22', '55', '35', '85');


