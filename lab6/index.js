/**
 * Create "index.js"
Create a express server()
Create a route ("/") that sends the string "Hello World!"
Create a route ("/person") that sends back a JSON object with the following properties:
name (string): your first name
color (string): your favorite color
Have the Express server listen on port 45030
 */

import Express from "express";

const App = Express();

const object = {
    name: "Connor",
    color: "red"
}
const port = 45030;

App.get("/", function(req, res){
    res.send("Hello World!");
})

App.get("/person", function(req, res){
    res.send(object);
})

App.listen(port, function(){
    console.log("Server is running!");
});