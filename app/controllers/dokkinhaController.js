const lindinhasModel = require("../models/lindinhasModel");

module.exports = (req, res) => {
    const lindas = lindinhasModel.getLindas("dokkinha");
    res.render('dokkinha', { lindas });
};