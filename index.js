const express = require('express');
const path = require('path');
const routes = require("./app/routes/routes");

const port = 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));

app.use(express.static("public"));

routes(app);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});