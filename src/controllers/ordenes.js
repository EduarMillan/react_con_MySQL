import { connect2 } from "../database";

export const getOrdenes = async (req, res) => {
  const [row] = await (await connect2()).query("SELECT * FROM trabajosrealizados");
  console.log(row);
  res.json(row);
};

export const getOrden = async (req, res) => {
  const [row] = await (
    await connect2()
  ).query("SELECT * FROM trabajosrealizados WHERE id = ?", [req.params.id]);
  if (row.length == 0) {
    res.json("Orden no encontrada");
  } else {
    res.json(row);
  }
};

export const getContadorOrdenes = async (req, res) => {
  const [row] = await (
    await connect2()
  ).query("SELECT COUNT(*) FROM trabajosrealizados");
  res.json(row[0]["COUNT(*)"]);
};

export const saveOrdenes = async (req, res) => {

  const [rs] = await (
    await connect2()
  ).query(
     "SELECT MAX(id) AS id FROM trabajosrealizados"
    );
  console.log(rs[0].id);

  await (
    await connect2()
  ).query(
    "INSERT INTO materialestrabajosrealizados (id_orden, nombre, descripcion, medida_largo, medida_ancho, precio_largo, precio_m2, precio_total) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      rs[0].id+1,
      req.body.nombre_material,
      req.body.descripcion_material,
      req.body.medida_largo,
      req.body.medida_ancho,
      req.body.precio_largo,
      req.body.precio_m2,
      req.body.precio_total 
    ]
);

  var impuesto_representacion = req.body.precio * 0.11;
  var impuesto_onat = (req.body.precio - impuesto_representacion)*0.35;
  var impuesto_equipos = (req.body.precio - impuesto_representacion - impuesto_onat-req.body.costo_total)*0.1;
  var utilidad = (req.body.precio - impuesto_representacion - impuesto_onat - impuesto_equipos -req.body.costo_total);
    await (
      await connect2()
    ).query(
      "INSERT INTO trabajosrealizados (nombre, descripcion, precio, fecha, otros_gastos_descripcion, costo_otros_gastos, impuesto_representacion, impuesto_onat, impuesto_equipos, costo_total, utilidad) VALUES (?, ?, ?, ?, ?, ?,?,?,?,?,?)",
      [
        req.body.nombre,
        req.body.descripcion,
        req.body.precio,
        req.body.fecha,
        req.body.otros_gastos_descripcion,
        req.body.costo_otros_gastos,
        impuesto_representacion,
        impuesto_onat,
        impuesto_equipos,
        req.body.costo_total,
        utilidad
      ]
      
    );
};

export const deleteOrden = async (req, res) => {
  await (
    await connect2()
  ).query("DELETE FROM trabajosrealizados WHERE id =?", [req.params.id]);
  res.sendStatus(204);
};

export const updateOrden = async (req, res) => {
 /* await (
    await connect2()
  ).query("UPDATE trabajosrealizados SET ? WHERE id=?", [req.body, req.params.id]);
  res.sendStatus(204);*/
  var impuesto_representacion = req.body.precio * 0.11;
  var impuesto_onat = (req.body.precio - impuesto_representacion)*0.35;
  var impuesto_equipos = (req.body.precio - impuesto_representacion - impuesto_onat-req.body.costo_total)*0.1;
  var utilidad = (req.body.precio - impuesto_representacion - impuesto_onat - impuesto_equipos -req.body.costo_total);
  await (
    await connect2()
  ).query("UPDATE trabajosrealizados SET nombre = ?, descripcion = ?, precio = ?, fecha = ?, otros_gastos_descripcion = ?, costo_otros_gastos = ?, impuesto_representacion = ?, impuesto_onat =?, impuesto_equipos = ?, costo_total = ?, utilidad=?  WHERE id=?", 
  [ 
req.body.nombre,
req.body.descripcion,
req.body.precio,
req.body.fecha,
req.body.otros_gastos_descripcion,
req.body.costo_otros_gastos,
impuesto_representacion,
impuesto_onat,
impuesto_equipos,
req.body.costo_total,
utilidad,
req.params.id
  ]);
  res.sendStatus(204);
};
