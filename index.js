const express = require('express');
const path = require("path")

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'broken.html'))
});

app.get('/option-one', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'option-one.html'))
});

app.get('/option-two', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'option-two.html'))
});


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
    console.log('Server listening at: http://localhost:' + PORT);
});
