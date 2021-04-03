/**
Create a Database class with connect(), close(), createOne(), and readOne() methods.
connect() method should use the "lab10" database and "people" collection.
createOne() method should use insertOne() to create a document with the fields firstName, lastName, 
and favoriteColor passed to it. It should also return an object with these same properties.
readOne() method should use findOne() to return a found document or {person: "not found"}.
close() should close the database connection.
 */

import MongoClient from 'mongodb';

const URL = 'mongodb+srv://ConnorBurns:cs2iR7sYoVimWnld@cluster0.yuzwq.mongodb.net';

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }
    async connect() {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
        this.database = connection.db("lab10");
        this.collection = database.collection("people");
    }

    async createOne(person){
        await this.collection.insertOne({
            "firstName": "Connor",
            "lastName": "Burns",
            "favoriteColor": "Red"
        });

        this.names.push(person);
        return {person: person};
    }

    async readOne(person){
        await this.collection.findOne({
            "firstName": "",
            "lastName": "",
            "favoriteColor": ""
        })

        let result = {person: "Not Found!"};

        this.names.forEach(value => {
            if(value == perosn){
                result = {person: person}
            }
        });

        return result;
    }

    close() {
        if(this.collection != null) {
          this.collection.close();
        }
      }
}


export default Database;