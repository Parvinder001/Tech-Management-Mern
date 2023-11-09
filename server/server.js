import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome Parvinder singh on tech management project');
})

app.get('/register', (req, res) => {
    res.status(200).send('<h1>Welcome on Register Page</h1>');
});

const PORT = 2000;

app.listen(PORT, () => {
    console.log(`Your Server is started on port ${PORT}`)
})