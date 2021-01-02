const express = require("express");
const app = express();
//used to read json formatted data from the body
app.use(express.json());

//connection with mongo DB server
const mongoClient = require("mongodb").MongoClient;
connection_string = "mongodb+srv://admin:Keerthi@keerthicluster.sl95i.mongodb.net/test?retryWrites=true&w=majority";


mongoClient.connect(connection_string, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('test')
        const mycollection = db.collection('users')

        app.get('/', (req, res) => {
            mycollection.find().toArray()
                .then(results => {
                    console.log(results)
                    res.send(results);
                })
                .catch(error => console.error(error))
            // ...
        })

        app.post('/insert', (req, res) => {

            var payload = JSON.stringify(req.body)
            mycollection.insert(JSON.parse(payload))
                .then(result => {
                    console.log(result + "inserted the record to collection")
                    res.send("record inserted")
                })
                .catch(error => console.error(error))
        })

    })
    .catch(console.error)


app.listen('5000', '0.0.0.0', () => {
    console.log("server is listening on 9000 port");
})
