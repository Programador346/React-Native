import {connect} from "../database";


export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM task");
    res.json(rows);
  };
export const getTaskById=async (req, res)=>{
    const connection = await connect();
    const rows = await connection.execute("SELECT * FROM task WHERE id = ?", [
      req.params.id,
  ]);
  res.json(rows[0][0]);
};
export const getTaskCount=async (req, res)=>{
    const connection = await connect();
    const [rows] = await connection.execute("SELECT COUNT(*) FROM task");
    res.json(rows[0]["COUNT(*)"]);
};
export const createTask=async (req, res)=>{
    try {
        const connection = await connect();
        const [results] = await connection.execute(
          "INSERT INTO task(tittle, description) VALUES (?, ?)",
          [req.body.tittle, req.body.description]
        );
    
        const newTask = {
          id: results.insertId,
          ...req.body,
      };
        res.json(newTask);
      } catch (error) {
        console.error(error);
      }
};
export const deleteTask=async (req, res)=>{
    const connection =  await connect();
  const result = await connection.execute("DELETE FROM task WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);

  res.sendStatus(204);
};
export const updateTask=async (req, res)=>{
    const connection =  await connect();
     await connection.query("UPDATE task SET ? WHERE id = ?", [
        req.body,
        req.params.id,
    ]);
    res.sendStatus(204);
};