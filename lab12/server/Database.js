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
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    async createOne(books, title, author, description) {
        if (this.collection != null){
            let result = await this.collection.insertOne({
                "books": books,
                "title": title,
                "author": author,
                "description": description
            });

            return result;
        }
    }

    async readOne(books) {
        if (this.collection != null){
            const result = await this.collection.findOne({
                "books": books
            })
            if(result != null){
                return result;
            } else{
                return {books: "not found"}
            }
        }
    }
    async readMany(title, author) {
        let books = []

        let search = {}

        if (title != null) search.title = title;
        if (author != null) search.author = author;

        return {books};
        
    }

    async updateOne(title, author, description) {
        if (this.collection != null){
            const result = await this.collection.updateOne({"title": title}, {$set: {"author": author}}, {"description": description});
            return result;
        } else {
            return null;
        }
    }

    async deleteOne(books) {
        if (this.collection != null){
            const result = await this.collection.deleteOne({"books": books});
            return {books: result.deleteCount};
        } else {
            return {books: 0};
        }
    }

    close() {
        if(this.collection != null) {
          this.collection.close();
        }
      }
}

export default Database;