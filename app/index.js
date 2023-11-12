const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});
  
  app.post('/add', (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    res.redirect('/');
});
  
  app.post('/delete', (req, res) => {
    const { index } = req.body;
    tasks.splice(index, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
