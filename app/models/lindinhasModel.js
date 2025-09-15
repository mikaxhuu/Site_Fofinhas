const lindas = {
    dokkinha: [
        { fotinha: "dokkinha_1.jpg" },
        { fotinha: "dokkinha_2.jpg" },
        { fotinha: "dokkinha_3.jpg" },
        { fotinha: "dokkinha_4.jpg" },
        { fotinha: "dokkinha_5.jpg" },
        { fotinha: "dokkinha_6.jpg" },
        { fotinha: "dokkinha_7.jpg" }
    ],
    docinho: [
        { fotinha: "docinho_1.jpg" },
        { fotinha: "docinho_2.jpg" },
        { fotinha: "docinho_3.jpg" },
        { fotinha: "docinho_4.jpg" },
        { fotinha: "docinho_5.jpg" },
        { fotinha: "docinho_6.jpg" },
        { fotinha: "docinho_7.jpg" },
    ]
};

module.exports = {
    getLindas: (nome) => lindas[nome] || []
};