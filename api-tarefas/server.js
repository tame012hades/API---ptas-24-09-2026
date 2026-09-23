const express = require('express');

const app = express();

const tarefas = [
    {
        id: 1,
        titulo: 'Estudar',
        concluida: false
    },
    {
        id: 2,
        titulo: 'Fazer trabalho',
        concluida: true
    },
    {
        id: 3,
        titulo: 'Ir para a escola',
        concluida: false
    }
];


app.get('/', (req, res) => {
    res.send('API de Tarefas no ar');
});

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});


app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    res.json(tarefa);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});