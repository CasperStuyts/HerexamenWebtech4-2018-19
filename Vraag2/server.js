const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db;
const uri = "mongodb://localhost:27017/examen"
const client = new MongoClient(uri,{useNewUrlParser:true});
client.connect(err => {
db = client.db("overtredingen");
  // perform actions on the collection object

});



app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000')
})
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.post('/searchbyadress', (req, res) => {
  db.collection('overtredingen').find().toArray((err,result)=>{
    if(err) return console.log(err)
    res.render('index.ejs',{quotes: result})
  })

})

app.post('/searchbyamount', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
