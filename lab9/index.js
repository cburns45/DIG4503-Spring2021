import MongoClient from 'mongodb';

const URL = 'mongodb+srv://ConnorBurns:cs2iR7sYoVimWnld@cluster0.yuzwq.mongodb.net';

async function connect(){
    try{
        let connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
        let database = connection.db("sample_airbnb");
        let collection = database.collection("listingsAndReviews");
        let result = await collection.findOne({beds: {$gte: 5} }, {price: {$lte: 200}}, {review_scores : {$gte: 99}});
        console.log(result);
        connection.close();
    }

    catch(error){
        console.log(error);
    }
}



connect();