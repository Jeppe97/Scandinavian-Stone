const express = require('express');
const app = express();
const mysql = require('mysql');

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
app.get('/gettimestones', (req, res) => {
    const {quarryName, method} = req.query;
    let sql = `CALL timeForStones('${quarryName}','${method}')`;
    let query = db.query(sql, true, (err, results, fields) => {
        if(err) console.log(err);
        const info = results[0];
        console.log(info);
        res.send(info);
    });
});

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

//controll if name and password is right
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

//insert the side on a disc (including blasting values)
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

//insert a new disc
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

//insert the side in the block 
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

//insert a new block
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

//insert a new block
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
//insert side for a primary stone
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
 

