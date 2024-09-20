const express = require("express")
const { somar, subtrair, multiplicar, dividir } = require('./utils/calculadora');
const app = express()

const PORT = 8080;

app.get('/', (_,res) => {
    res.send("Atividade 3 - API Calculadora")
})

app.get('/dividir/:a/:b', (req, res) => {
    const {a, b} = req.params
    const resultado = dividir(a,b);
    if(resultado){
        res.send(`${a} / ${b} = ${resultado}`)
    }else {
        res.send("Não é possível dividir por 0.")
    }
})

app.get('/multiplicar/:a/:b', (req, res) => {
    const {a, b} = req.params
    res.send(`${a} * ${b} = ${multiplicar(a,b)}`)
})

app.get('/somar/:a/:b', (req, res) => {
    const {a, b} = req.params
    res.send(`${a} + ${b} = ${somar(a,b)}`)
})

app.get('/subtrair/:a/:b', (req, res) => {
    const {a, b} = req.params
    res.send(`${a} - ${b} = ${subtrair(a,b)}`)
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`)
})