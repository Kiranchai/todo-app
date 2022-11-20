const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const myJson = require('./data.json');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
    res.send(myJson);
})

app.post('/tasks', (req,res) => {
    console.log(req.body);
    res.status(200)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
