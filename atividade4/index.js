const express = require("express");

const app = express();

const PORT = 3333;

let produtos = [];

function produtoExistente(id) {
  return produtos.find((produto) => produto.id == id);
}

app.get("/", (_, res) => {
  res.send("Atividade 4 - Estoque de produtos");
});

app.get("/adicionar/:id/:nome/:qtd", (req, res) => {
  const { id, nome, qtd } = req.params;
  if (produtoExistente(id)) {
    res.send("Esse id de produto já existe.");
  }
  const novoProduto = {
    id,
    nome,
    qtd,
  };
  produtos.push(novoProduto);
  res.send("Seu produto foi adicionado.");
});

app.get("/listar", (_, res) => {
  res.json(produtos);
});

app.get("/remover/:id", (req, res) => {
  const { id } = req.params;
  if (produtoExistente(id)) {
    produtos = produtos.filter((produto) => produto.id != id);
    res.send("Seu produto foi removido.");
  } else {
    res.send("Produto não existe.");
  }
});

app.get("/editar/:id/:qtd", (req, res) => {
  const { id, qtd } = req.params;
  const index = produtos.findIndex((produto) => produto.id == id);
  if (index > -1) {
    produtos[index].qtd = qtd;
    res.send("Seu produto foi atualizado.");
  } else {
    res.send("O produto não existe.");
  }
});

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
