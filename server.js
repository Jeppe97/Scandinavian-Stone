
const express = require('express');
const app = express();


const mysql = require('mysql');
var bodyParser = require('body-parser');

//import {value1} from './client/src/components/MainMenu';
//var {test2} = require ('./client/src/components/MainMenu');
//app.use(bodyParser.json({type:'application/json'}));
//app.use(bodyParser.urlencoded({extended:true}));

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
/*
app.get('/createtableA', (req, res) =>{
    let sql = 'CREATE TABLE A(id int AUTO_INCREMENT, name VARCHAR(225), number INT, PRIMARY KEY (id))';
    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('a table created');
    });
});
*/

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



