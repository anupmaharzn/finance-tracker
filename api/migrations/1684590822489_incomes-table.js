/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
     CREATE TABLE incomes (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        amount numeric NOT NULL CHECK(amount > 0),
        detail VARCHAR(240) ,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
     );
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
     DROP TABLE incomes;
    `);
};
