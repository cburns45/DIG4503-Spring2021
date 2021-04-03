/**
 * Create an Express server listening on port 45030.
Create a PUT route of "/people/create" using req.body to process firstName, lastName, and favoriteColor values. It should use the Database method of 
createOne() and respond with the document created.
Create a GET route of "/people/:person" using a request parameter. It should use the Database method of readOne() 
and respond with either the document found or {person: "not found"}.
 */


import Express from "express";
import Database from './Database.js';


const App = Express();
const port = 45030;
const d = new Database();
App.use(Express.json());

//create
App.put("/people/create", (req,res) => {
    let person = req.params.person;
    d.createOne(person);
    res.json({
        person: person,
        body: req.body
    });
});

//look for person
App.get("/people/:person", (req,res) => {
    let person = req.params.person;
    d.readOne(person);
    res.json({
        person: person,
        person: req.body
    });

    console.log(req.query.firstName, req.query.lastName, req.query.favoriteColor);
});


App.listen(port, () => {
    console.log("Server running!");
});