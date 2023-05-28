const express = require("express");
const userController = require("../controllers/userController.js");

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/api/users", userController.index);
app.get("/api/users/:id", userController.find);
app.post("/api/users", userController.store);
app.put("/api/users/:id", userController.update);
app.delete("/api/users/:id", userController.deleteData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
