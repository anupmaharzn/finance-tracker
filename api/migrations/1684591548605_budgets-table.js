/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
     CREATE TABLE budgets (
        id SERIAL PRIMARY KEY,
        started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        end_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        amount numeric NOT NULL CHECK(amount > 0),
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
     );
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
     DROP TABLE budgets;
    `);
};
