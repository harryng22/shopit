const app = require("./app");

const dotenv = require("dotenv");

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`);
});
