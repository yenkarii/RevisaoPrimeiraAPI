const express = require("express");

const app = express();

let ALUNOS = [
    {id: 1, nome: "Giulia", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Vinicius", curso: "Redes de Computadores"},
    {id: 3, nome: "Iago", curso: "Banco de Dados"},
    {id: 4, nome: "Igor", curso: "Administração"},
    {id: 5, nome: "Ana", curso: "Desenvolvimento de Sistemas"},
];

app.get("/", (req, res) =>{
    res.json({
        mensagem: "API Alunos funcionando."
    })
});

app.get("/alunos", (req, res) =>{
    res.json(ALUNOS);
})

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})