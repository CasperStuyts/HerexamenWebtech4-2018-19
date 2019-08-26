const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db;
const uri = "mongodb://localhost:27017/examen"
const client = new MongoClient(uri,{useNewUrlParser:true});
client.connect(err => {
db = client.db("examen");
  // perform actions on the collection object

});



app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000')
})
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/searchbyadress', (req, res) => {
  var query = {};
  if (req.body.Adress) {
    query.opnameplaats_straat = req.body.Adress;
}

if (req.body.AmountOfOvertredingen) {
    query.aantal_overtredingen_snelheid >= req.body.AmountOfOvertredingen;
}
  db.collection('overtredingen').find(query).toArray(function(err,docs){



    console.log(query)
    if(err) return console.log(err)
    res.render('results.ejs',{search_results: docs})
  })

})

app.post('/searchbyamount', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
