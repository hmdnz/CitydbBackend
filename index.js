const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const resdataRouter = require("./routes/residentdata");
app.use("/res-data", resdataRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running @3000");
  });
});
