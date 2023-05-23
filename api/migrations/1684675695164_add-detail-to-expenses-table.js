/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
     ALTER TABLE expenses
     ADD COLUMN detail VARCHAR(240);
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE expenses
    DROP COLUMN detail;
    `);
};
