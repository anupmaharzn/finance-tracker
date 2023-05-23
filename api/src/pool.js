const pg = require("pg");

class Pool {
  _pool = null;

  connect(options) {
    this._pool = new pg.Pool(options);
    //when we first create a pool is dont connect with database
    //when have to have client inorder to do so,
    //one of the solution
    //thats we need to create query that creates client -> check out connection
    return this._pool.query(`SELECT 1 + 1;`);
  }

  close() {
    return this._pool.end();
  }

  query(sql, params) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();
