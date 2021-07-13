import pool from '../dbconfig/dbconnector';

class UsersController {

    public async get(req, res) {
      try {
          const { login } = req.body;
          const client = await pool.connect();
          const sql = "SELECT * FROM users WHERE login LIKE $1";
          const { rows } = await client.query(sql, [login]);
          const todos = rows as Array<{
            id: number;
            login: string;
            password: string;
          }>;
          client.release();
          if(todos[0].password === 'admin') {
            res.send(todos[0].password);
          } else {
            res.sendStatus(404);
          }
          
      } catch (error) {
          res.status(400).send(error);
      }
    }

    public async set(req, res) {
      try {
          const client = await pool.connect();
          const { login, password } = req.body;
          const sql = `INSERT INTO users (login, password) VALUES ($1, $2)`;
          console.log(await client.query(sql, [login, password]));
          client.release();
          // res.send();
          res.sendStatus(200);
      } catch (error) {
          res.status(400).send(error);
      }
    }
}

export default UsersController;
