
const express = require('express');
const app = express();


const mysql = require('mysql');
var bodyParser = require('body-parser');


var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projectscs'

});
const port = 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));

db.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});


const selectAll = 'SELECT * FROM quarry';
const selectSome = "SELECT * FROM quarry WHERE quarryName = 'Hej'";

//Select post
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM quarry';
    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});

app.get('/quarry/instert', (req, res)=> {
    const {quarryName} = req.query;
    const INSERT_TO_QUARRY = `INSERT INTO quarry (quarryName) VALUES('${quarryName}')`;
  
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

app.get('/quarry/instertTime', (req, res)=> {
    const { quarryName, time } = req.query;
    const INSERT_TO_QUARRY = `INSERT INTO quarry (quarryName, time) VALUES('${quarryName}',${time})`;
  
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

app.get('/quarry', (req, res) => {
    db.query(selectAll, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    })
});



