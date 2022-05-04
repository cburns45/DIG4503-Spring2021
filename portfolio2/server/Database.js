import MongoClient from 'mongodb';
const URL = 'mongodb+srv://cburns2545:Mugsy2017@cluster0.5lqza.mongodb.net/test';

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }
    async connect() {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
        this.database = this.connection.db("Movies");
        this.collection = this.database.collection("MovieLibrary");
    }

    async createOne(movie, title, director, description) {
        if (this.collection != null){
            let result = await this.collection.insertOne({
                "movie": movie,
                "title": title,
                "director": director,
                "description": description
            });

            return result;
        }
    }

    async readOne(movie) {
        if (this.collection != null){
            const result = await this.collection.findOne({
                "movie": movie
            })
            if(result != null){
                return result;
            } else{
                return {movie: "not found"}
            }
        }
    }
    

    /* async updateOne(title, director, description, number) {
        if (this.collection != null){
            const result = await this.collection.updateOne({"title": title}, {$set: {"director": director}}, {"description": description}, {"number":number});
            return result;
        } else {
            return null;
        }
    } */

    async deleteOne(movie) {
        if (this.collection != null){
            const result = await this.collection.deleteOne({"movie": movie});
            return {movie: result.deleteCount};
        } else {
            return {movie: 0};
        }
    }

    close() {
        if(this.collection != null) {
          this.collection.close();
        }
      }
}

export default Database;