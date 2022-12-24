import mysql from "mysql2/promise";
import { config } from "./config";

export const connect = async () => {
  const conn = await mysql.createConnection(config);
  return conn;
};

