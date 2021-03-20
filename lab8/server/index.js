import Express from "express";
import CORS from 'cors';

const App = Express();
const port = 45030;
App.use(CORS());

const names = [
    "Cortney",
    "Dewayne",
    "Trenton",
    "Pamala",
    "Ettie",
    "Errol",
    "Lorrie",
    "Hang",
    "Lauryn",
    "Caterina",
    "Isa",
    "Marcela"
];

App.get("/people/:person", (req, res) => {
    let person = req.params.person
    let result = {
        name: "Not found!"
    };

    names.forEach((value) => {

        if (value == person) {
            result = {
                "name": value
            };
        }
    });

    res.json(result)
});

App.put("/people/:person", (req, res) => {

    let person = req.params.person

    let result = {"name": person}

    names.push(person)
    
    res.json(result)

});

App.get("/search/:name", (req, res) => {

    let result = {
        search: ["Not found!"]
    };

    let nameResult = [];

    names.forEach((value) => {

        if (value.includes(req.params.name)) {
            nameResult.push(value);
        }
    });

    if (nameResult.length > 0) {

        result = {
            search: nameResult
        };
    }

    res.json(result);
});



App.listen(port, () => {
    console.log("Server running!");
});
