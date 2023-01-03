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

export const saveTask = async (req, res) => {
  const result = await (
    await connect()
  ).query("INSERT INTO tasks (title, description) VALUES (?, ?)", [
    req.body.title,
    req.body.description,
  ]);
  console.log(result);
};

export const deleteTask = async (req, res) => {
  await (
    await connect()
  ).query("DELETE FROM tasks WHERE id =?", [req.params.id]);
  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const result = await (
    await connect()
  ).query("UPDATE tasks SET ? WHERE id=?", [req.body, req.params.id]);
  console.log(result);
  res.sendStatus(204);
};
