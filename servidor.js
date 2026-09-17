const express = require("express");

express().get("/", (req, res) =>{
    res.json({
        mensagem: "API Alunos funcionando."
    })
});

const PORTA = 3000;
express().listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})