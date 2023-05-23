const app = require("./src/app.js");
const pool = require("./src/pool.js");
require("dotenv").config();

const PORT = process.env.PORT;

pool
  .connect({
    host: process.env.DATABASE_DEVELOPMENT_HOST,
    port: process.env.DATABASE_DEVELOPMENT_PORT,
    database: process.env.DATABASE_DEVELOPMENT_NAME,
    user: process.env.DATABASE_DEVELOPMENT_USERNAME,
    password: process.env.DATABASE_DEVELOPMENT_PASSWORD,
  })
  .then(() => {
    console.log("Database Connection Established");
    app().listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
