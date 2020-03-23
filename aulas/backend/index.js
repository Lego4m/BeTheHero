const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: "Semanha Omnistack 11.0",
        aluno: "Leonardo Maron"
    });
});

app.listen(3333);