const homeController = require("../controllers/homeController");
const dokkinhaController = require("../controllers/dokkinhaController");
const docinhoController = require("../controllers/docinhoController");
const textinhoController = require("../controllers/textinhoController");

module.exports = (app) => {
    app.get("/", homeController);
    app.get("/dokkinha", dokkinhaController);
    app.get("/docinho", docinhoController);
    app.get("/textinho", textinhoController);
};