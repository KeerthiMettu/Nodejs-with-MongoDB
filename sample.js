/*

//user the model classes here to perform operations
const User = require("./Model/users");


//const mongoose = require("mongoose").MongoClient;
// mongoose.connect(
//     connection_string, { useUnifiedTopology: true, useNewUrlParser: true },
//     (req, res) => {
//         console.log("Connected to Mongo DB");
//     }
// );

// mongoClient.connect(
//     connection_string, { useUnifiedTopology: true, useUnifiedTopology: true }, (err, client) => {
//         if (err) return console.error(err)
//         console.log('Connected to Database')

//         const db = client.db('test')
//         const myCollection = db.collection('users')

//         console.log("Db data: " + client);
//     })

app.get("/", (req, res) => {

    res.send("First request111");
});

app.get("/users", (req, res) => {
    let users = ["user1", "user2", "user3", "user456"];
    res.send(users);
})

app.get("/getall", (req, res) => {
    const cursor = db.myCollection("test").find();
    console.log("received data from database" + cursor);
})


//simple post on console
app.post("/create", (req, res) => {
    console.log("trying to create user " + req.body.name);
    res.send(`created the user ${req.body.name}`);
})

//post or insert data directly to database
app.post("/insert_users", async(req, res) => {
    try {
        const each_user = new User(req.body);
        await each_user.save();
        res.send(each_user);
    }
    catch (error) {
        console.log("Error occurred while inserting data");
        res.send("Error Message" + error);
    }
})
*/
