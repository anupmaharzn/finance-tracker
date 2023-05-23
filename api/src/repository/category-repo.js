const pool = require("../pool");

class CategoryRepo {
  static async find() {
    const { rows } = await pool.query("SELECT * FROM categories;");
    return rows;
  }
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id=$1;", [
      id,
    ]);
    return rows[0];
  }

  static async store(data) {
    const { name } = data;
    const { rows } = await pool.query(
      `INSERT INTO categories (name) VALUES ($1) RETURNING *;`,
      [name]
    );
    return rows[0];
  }

  static async edit(id, name) {
    const { rows } = await pool.query(
      `UPDATE categories SET name=$1 WHERE id=$2 RETURNING *;`,
      [name, id]
    );
    return rows[0];
  }
  static async destroy(id) {
    const { rows } = await pool.query(
      `DELETE FROM categories WHERE id=$1 RETURNING *;`,
      [id]
    );
    return rows[0];
  }
}

module.exports = CategoryRepo;
