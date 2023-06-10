const express = require("express");
const cors = require("cors");
const multer = require("multer");
const userController = require("../controllers/userController.js");

require("dotenv").config();
const app = express();
const port = process.env.PORT;

const upload = multer({ dest: "storage/buffer/" });

app.use(express.json());
app.use(cors());

app.get("/api/users", userController.index);
app.get("/api/users/:id", userController.find);
app.post("/api/users", upload.single("image"), userController.store);
app.put("/api/users/:id", userController.update);
app.delete("/api/users/:id", userController.deleteData);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
