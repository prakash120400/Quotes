const bodyParser = require('body-parser');
const express = require ('express');
var cors = require('cors')


const app = express();
var { urlencoded, json } = require ('body-parser','josn');
const { MongoClient } =require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const db = "Quotes";

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.post('/getAllData', async (req,res) => {
    console.log(req.body.input);
    await client.connect();
    const clientDb = client.db(db);
    const QuotesCollection = clientDb.collection("Quotes Collection");
    const data =await QuotesCollection.find({ Category:req.body.input }).toArray();
    client.close();
    res.json({ data: data })
})


app.get("/dataForm", (req,res) => {
    res.sendFile(__dirname+'/Views/form.html')

})  

app.get("/getAllTags", async (req,res) => {
    await client.connect()
    const clientDb = client.db(db);
    const QuotesCollection = clientDb.collection("Quotes Collection");
    const data =await QuotesCollection.find({ }).toArray();
    const tagList = {};
    data.forEach(Quote => {
    let tempCategory = Quote.Category;
    if(!tagList[tempCategory]){
        tagList[tempCategory] = 1;
    }

    })
    client.close();
    res.json({ tag: Object.keys(tagList) })
})

app.get("/getQuotes/:tagname", async (req,res)=>{ 
    console.log(req.params.tagname)
    await client.connect()
    const clientDb = client.db(db);
    const QuotesCollection = clientDb.collection("Quotes Collection");
    const data =await QuotesCollection.find({ Category: req.params.tagname}).toArray();
    
    client.close();
    res.json({ data: data })

})


app.listen(4000,(req,res)=>{
    console.log('Listening on http://localhost/:4000');
})

























// const { MongoClient }= require('mongodb'); 
// // const express = require('express')

// const url ='mongodb://localhost:27017';
// const client = new MongoClient(url);

// const db = "Quotes";


// try{
//     async function connect() {
//         await client.connect();
//         const clientDb = client.db(db);
//         const collections = await clientDb.listCollections().toArray();
//         collections.forEach(async(collections) => {
//         if (collections.name === "tags"){
//         const studentCollection = clientDb.collections(collection.name)
//         const data = await studentCollection.find({Category: 'love'}).toArray()
//         console.log(data);
//         }
//         })
    
//     }
//     connect();
// }
// catch(err) {
//     console.log(err)
// }
