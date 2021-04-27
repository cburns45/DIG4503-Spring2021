import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45030;
const d = new Database();
App.use(Express.json());
App.use(CORS());

d.connect();

App.put('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    let result = await d.createOne(ISBN, title, author, description);
    res.json(result);
})

App.get('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await d.readOne(ISBN)

    res.json(result);

})



App.patch('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const newISBN = req.body.newISBN

    const result = await d.updateOne(ISBN, title, author, description, newISBN);

    res.json(result);

})

App.delete('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await d.deleteOne(ISBN);

    res.json(result);

})

App.listen(port, () => {
    console.log("Server running!");
});