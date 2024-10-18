const express = require("express");
const mustacheExpress = require("mustache-express")

const app = express();

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    const {error_form, nome, endereco, telefone, data} = req.query
    res.render('index.html', {error_form, nome, endereco, telefone, data})
}
)

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;

    if (nome.length == 0 || endereco.length == 0 || telefone.length == 0 || data.length == 0) {
        return res.redirect(`/?error_form=1&nome=${nome}&data=${data}&endereco=${endereco}&telefone=${telefone}`);
    }

    res.render('dados', { nome, endereco, telefone, data });
});

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`);
  });
