const pool = require("../pool");

class UserRepo {
  static async find() {
    const { rows } = await pool.query("SELECT * FROM users;");
    return rows;
  }
  static async findByEmail(email) {
    const { rows } = await pool.query("SELECT * FROM users WHERE email=$1;", [
      email,
    ]);
    return rows[0];
  }
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    return rows[0];
  }

  static async store(data) {
    const { username, email, password } = data;
    const { rows } = await pool.query(
      `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *;`,
      [username, email, password]
    );
    return rows[0];
  }

  static async edit(id, username, email) {
    const { rows } = await pool.query(
      `UPDATE users SET username=$1,email=$2 WHERE id=$3 RETURNING *;`,
      [username, email, id]
    );
    return rows[0];
  }
}

module.exports = UserRepo;
