const pool = require("../pool");

class ExpenseRepo {
  static async find(user_id) {
    const { rows } = await pool.query(
      "SELECT expenses.id,expenses.created_at,expenses.amount, expenses.detail,expenses.category_id,expenses.user_id,categories.name FROM expenses JOIN categories ON categories.id = expenses.category_id WHERE user_id=$1;",
      [user_id]
    );
    return rows;
  }

  static async findById(id, user_id) {
    const { rows } = await pool.query(
      "SELECT * FROM expenses WHERE id=$1 AND user_id=$2;",
      [id, user_id]
    );

    return rows[0];
  }

  static async store(data, user_id) {
    const { amount, detail, category_id, created_at } = data;
    //if created_at is provided by user
    if (data.created_at) {
      const { rows } = await pool.query(
        `INSERT INTO expenses (amount,detail,category_id,user_id,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
        [amount, detail, category_id, user_id, created_at]
      );
      return rows[0];
    } else {
      //if not then default time stamp
      const { rows } = await pool.query(
        `INSERT INTO expenses (amount,detail,category_id,user_id) VALUES ($1,$2,$3,$4) RETURNING *;`,
        [amount, detail, category_id, user_id]
      );
      return rows[0];
    }
  }

  static async edit(id, amount, detail, category_id, created_at) {
    const { rows } = await pool.query(
      `UPDATE expenses SET amount=$1,detail=$2,category_id=$3, created_at=$4 WHERE id=$5 RETURNING *;`,
      [amount, detail, category_id, created_at, id]
    );
    return rows[0];
  }
  static async destroy(id) {
    const { rows } = await pool.query(
      `DELETE FROM expenses WHERE id=$1 RETURNING *;`,
      [id]
    );
    return rows[0];
  }

  static async totalExpense(user_id) {
    const { rows } = await pool.query(
      "SELECT SUM(amount) as totalExpense FROM expenses WHERE user_id=$1",
      [user_id]
    );
    return rows[0];
  }
  //filter by category
  static async findByCategory(user_id, category_id) {
    const { rows } = await pool.query(
      "SELECT expenses.id,expenses.created_at,expenses.amount, expenses.detail,expenses.category_id,expenses.user_id,categories.name FROM expenses JOIN categories ON categories.id = expenses.category_id WHERE category_id=$1 AND user_id=$2",
      [category_id, user_id]
    );
    return rows;
  }
}

module.exports = ExpenseRepo;
