import { connect } from "../database";

export const getTasks = async (req, res) => {
  const [row] = await (await connect()).query("SELECT * FROM tasks");
  console.log(row);
  res.json(row);
};

export const getTask = async (req, res) => {
  const [row] = await (
    await connect()
  ).query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
  if (row.length == 0) {
    console.log("tarea no encontrada");
    res.json("tarea no encontrada");
  } else {
    console.log(row);
    res.json(row);
  }
};

export const getTaskCount = async (req, res) => {
  const [row] = await (await connect()).query("SELECT COUNT(*) FROM tasks");
  console.log(row);
  res.json(row[0]["COUNT(*)"]);
};

export const saveTask = (req, res) => {
  res.send("Hello world");
};

export const deleteTask = (req, res) => {
  res.send("Hello world");
};

export const updateTask = (req, res) => {
  res.send("Hello world");
};
