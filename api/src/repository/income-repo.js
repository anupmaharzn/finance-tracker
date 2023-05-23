const pool = require("../pool");

class IncomeRepo {
  static async find(user_id) {
    const { rows } = await pool.query(
      "SELECT * FROM incomes WHERE user_id=$1",
      [user_id]
    );
    return rows;
  }
  static async findById(id, user_id) {
    const { rows } = await pool.query(
      "SELECT * FROM incomes WHERE id=$1 AND user_id=$2;",
      [id, user_id]
    );
    return rows[0];
  }

  static async store(data, user_id) {
    const { amount, detail } = data;
    const { rows } = await pool.query(
      `INSERT INTO incomes (amount,detail,user_id) VALUES ($1,$2,$3) RETURNING *;`,
      [amount, detail, user_id]
    );
    return rows[0];
  }

  static async edit(id, amount, detail) {
    const { rows } = await pool.query(
      `UPDATE incomes SET amount=$1,detail=$2 WHERE id=$3 RETURNING *;`,
      [amount, detail, id]
    );
    return rows[0];
  }
  static async destroy(id) {
    const { rows } = await pool.query(
      `DELETE FROM incomes WHERE id=$1 RETURNING *;`,
      [id]
    );
    return rows[0];
  }

  static async totalIncome(user_id) {
    const { rows } = await pool.query(
      "SELECT SUM(amount) as totalIncome FROM incomes WHERE user_id=$1",
      [user_id]
    );
    return rows[0];
  }
}

module.exports = IncomeRepo;
