import app from "./app";

import dotenv from "dotenv";

// Setting up config file
dotenv.config({ path: "src/config/config.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server started on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
