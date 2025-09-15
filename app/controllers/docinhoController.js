const lindinhasModel = require("../models/lindinhasModel");

module.exports = (req, res) => {
    const lindas = lindinhasModel.getLindas("docinho");
    res.render('docinho', { lindas });
};