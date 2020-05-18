const express = require('express');
const app = express();
const mysql = require('mysql');
/*This file contains the database connection and handles the calls to the database */

//The connection to the database, project is the name of the local database
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project'

});
//run the server on a port 5000
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

db.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

//get the time for a specific method from a quarry, returns an id and the total time for the method
app.get('/gettimes', (req, res) => {
    const {quarryName, method} = req.query;
    let sql = `CALL timeMethod('${quarryName}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//Get the times for a primary stone from a specific quarry, returns the side ID, primary ID, average time and total time
app.get('/gettimesprimary', (req, res) => {
    const {quarryName, method} = req.query;
    let sql = `CALL timePrimary('${quarryName}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//Get the times for a disc from a quarry, returns the side ID, disc ID, average time and total time
app.get('/gettimesdisc', (req, res) => {
    const {quarryName, method} = req.query;
    let sql = `CALL timeDisc('${quarryName}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});
//get the times for a block from a quarry, returns the side ID, block ID, average time and total time
app.get('/gettimesblock', (req, res) => {
    const {quarryName, method} = req.query;
    let sql = `CALL timeBlock('${quarryName}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});
//control that the user name and password is correct, returns the quarry ID and quarry name
app.get('/logginuser', (req, res) => {
    const {name,password} = req.query;
    let sql = `CALL logginUser('${name}','${password}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//control that the admin name and password is right, returns the quarry ID
app.get('/logginadmin', (req, res) => {
  
    const {name,password} = req.query;
    let sql = `CALL logginAdmin('${name}','${password}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert the dimensions and method for a side on a disc (including blasting values)
app.get('/insertsidedisc', (req, res) => {
    const {discID,length1,height,time,method,sideNr,nr,length2,type,amount} = req.query;
    let sql = `CALL insertSideDisc('${discID}','${length1}','${height}','${time}','${method}','${sideNr}','${nr}','${length2}','${type}','${amount}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert a new disc, retruns the last disc id inserted 
app.get('/insertdisc', (req, res) => {
    const {quarryID, mainTime} = req.query;
    let sql = `CALL insertDisc('${quarryID}','${mainTime}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert the side of a block
app.get('/insertsideblock', (req, res) => {
    const {blockID,length,height,time,method,sideNr} = req.query;
    let sql = `CALL insertSideBlock('${blockID}','${length}','${height}','${time}','${method}','${sideNr}')`;
    db.query(sql, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

//insert a new block, returns the last block id inserted
app.get('/insertblock', (req, res) => {
    const {quarryID, mainTime} = req.query;
    let sql = `CALL insertBlock('${quarryID}','${mainTime}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert measurements for a block
app.get('/insertmeasure', (req, res) => {
    const {blockID,volume,weight,quality,price} = req.query;
    let sql = `CALL insertMeasurement('${blockID}','${volume}','${weight}','${quality}','${price}')`;
    
    db.query(sql, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

//insert a new primary stone, returns the last primary id inserted
app.get('/insertprimary', (req, res) => {
    const {quarryID, mainTime} = req.query;
    let sql = `CALL insertPrimary('${quarryID}','${mainTime}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert a side for a primary stone
app.get('/insertsideprimary', (req, res) => {
    const {primaryID,length1,height,time,method,sideNr,nr,length2,type,amount} = req.query;
    let sql = `CALL insertSidePrimary('${primaryID}','${length1}','${height}','${time}','${method}','${sideNr}','${nr}','${length2}','${type}','${amount}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});
 

