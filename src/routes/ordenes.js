import { Router } from "express";
import {
  deleteOrden,
  getOrden,
  getContadorOrdenes,
  getOrdenes,
  saveOrdenes,
  updateOrden,
} from "../controllers/ordenes";

const router = Router();

/**
 * @swagger
 * /materiales:
 *  get:
 *    summary: Muestra todos los materiales existentes en la base de datos
 */
router.get("/trabajosrealizados", getOrdenes);

/**
 * @swagger
 * /materiales/count:
 *  get:
 *    summary: Devuelve la cantidad de materiales existentes en la base de datos
 */
router.get("/trabajosrealizados/count", getContadorOrdenes);

/**
 * @swagger
 * /materiales/:
 *  get:
 *    summary: Muestra un material especificado existente en la base de datos mediante un id, en caso de no existeir devuelve un mensaje
 */
router.get("/trabajosrealizados/:id", getOrden);

/**
 * @swagger
 * /materiales:
 *  post:
 *    summary: salva los materiales introducidos en la base de datos
 */
router.post("/trabajosrealizados", saveOrdenes);

/**
 * @swagger
 * /materiales:
 *  delete:
 *    summary: Elimina un materiales existente en la base de datos mediante un id especificado
 */
router.delete("/trabajosrealizados/:id", deleteOrden);

/**
 * @swagger
 * /materiales:
 *  put:
 *    summary: Actualiza un material existentes en la base de datos usando un id
 */
router.put("/trabajosrealizados/:id", updateOrden);

export default router;
