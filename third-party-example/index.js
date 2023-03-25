const express = require("express");
const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`[SERVER:EXT] STARTED`);
});
