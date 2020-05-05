const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');

//Database connection
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project'

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

db.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});


const selectAll = 'SELECT * FROM quarry';

//gets the quarry id
app.get('/userloggin', (req, res) => {
  
    const {name,password} = req.query;
    let sql = `CALL loggin('${name}','${password}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert the side on a disc (including blasting values)
//http://localhost:5000/insertsidedisc?length1=1&height=1&time=1&method=1&nr=1&length2=1&type=1&amount=2
app.get('/insertsidedisc', (req, res) => {
    const {length1,height,time,method,nr,length2,type,amount} = req.query;
    let sql = `CALL insertSideDisc('${length1}','${height}','${time}','${method}','${nr}','${length2}','${type}','${amount}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert a new disc
app.get('/disc/instert', (req, res)=> {
    const {quarryID,mainTime,side1,side2,bottom} = req.query;
    const INSERT_TO_QUARRY = `INSERT INTO disc (quarryID,mainTime,side1,side2,bottom) 
    VALUES('${quarryID}','${mainTime}','${side1}','${side2}','${bottom}')`;
  
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

//insert the side in the block 
app.get('/insertsideblock', (req, res) => {
    const {length,height,time,method} = req.query;
    let sql = `CALL insertSideBlock('${length}','${height}','${time}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

//insert a new block
app.get('/insertblock', (req, res) => {
    const {quarryID, mainTime, side1,side2,bottom} = req.query;
    let sql = `CALL insertBlock('${quarryID}','${mainTime}','${side1}','${side2}','${bottom}')`;
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
 
//insert sides for a primary stone 
app.get('/insertsideprimary', (req, res) => {
    const {length1,height,time,method,nr,length2,type,amount} = req.query;
    let sql = `CALL insertSidePrimary('${length1}','${height}','${time}','${method}','${nr}','${length2}','${type}','${amount}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});
//insert a new primarystone
app.get('/primary/instert', (req, res)=> {
    const {quarryID,mainTime,side1,side2,side3,bottom} = req.query;
    const INSERT_TO_QUARRY = `INSERT INTO primarystone (quarryID,mainTime,side1,side2,side3,bottom) 
    VALUES('${quarryID}','${mainTime}','${side1}','${side2}','${side3}','${bottom}')`;
  
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});




////////////GAMMAL ///////////


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


//get all discs
app.get('/getdisc', (req, res) => {
    let sql = 'SELECT * FROM disc';
    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});


//insert into side table
//http://localhost:5000/side/instert?discID=2&sideNumber=1&time=2&hight=1&length=1&method=1&nrOfHoles=1&lengthHoles=1&blastingSort=1&amount=1
app.get('/side/instert', (req, res)=> {
    const {discID,sideNumber,time,hight,length,method,nrOfHoles,lengthHoles,blastingSort,amount} = req.query;
    const INSERT_TO_QUARRY = 
    `INSERT INTO side1 (discID,sideNumber,time,hight,length,method,nrOfHoles,lengthHoles,blastingSort,amount) 
    VALUES('${discID}','${sideNumber}','${time}','${hight}','${length}','${method}','${nrOfHoles}','${lengthHoles}','${blastingSort}','${amount}')`;
    	
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

//insert into quarry
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

//get all quarrys
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

//get all the blocks
app.get('/getblock', (req, res) => {
    let sql = 'SELECT * FROM block';
    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});

//get all the sides from a block
app.get('/getblockside', (req, res) => {
    let sql = 'SELECT * FROM sidablock';
    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});


//insert variables into the side of a block
//http://localhost:5000/block/instert?blockID=1&time=1&volume=1&weight=1&quality=1&price=1
app.get('/blockside/instert', (req, res)=> {
    const {blockID, sideNumber, time, method, volume, weight, quality, price} = req.query;
    const INSERT_TO_QUARRY = 
    `INSERT INTO sidablock (blockID, sideNumber, time, method,volume, weight, quality, price)
     VALUES('${blockID}','${sideNumber}','${time}','${method}','${volume}','${weight}','${quality}','${price}')`;
  
    db.query(INSERT_TO_QUARRY, (err, result)=> {
        if(err){
            return res.send(err)
        }
        else{
            return res.send("ADDED")
        }
    });
});

//get all sides from a block that uses the method sawing
app.get('/getblocksidesawing', (req, res) => {
    let sql = "SELECT * FROM sidablock WHERE method = 'sawing'";

    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});

app.get('/gettest', (req, res) => {
    let sql = "CALL selectsawing()";

    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});



//get all sides from a block that uses the method sawing
app.get('/getblocksideblasting', (req, res) => {
    let sql = "SELECT * FROM sidablock WHERE method = 'blasting'";

    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});

//a test for JOIN
app.get('/getblocksameid', (req, res) => {
    let sql =
     "SELECT sidablock.time FROM block JOIN sidablock ON block.blockID = sidablock.blockID WHERE block.blockID = '49'";

    let query = db.query(sql, (err, results) => {
        if(err) console.log(err);
        const drinks = [results];
        console.log(results);
        res.send(results);
    });
});