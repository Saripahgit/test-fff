const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: "root",
    host: "mysql-server",
    password: "123456789",
    database: "travel"
})


app.get('/attractions',(req,res) =>{
    db.query("SELECT * FROM attractions", (err,result)=>{
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.get('/login',(req,res) =>{
    db.query("SELECT * FROM login", (err,result)=>{
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post("/create", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const email = req.body.email;
    const avatar = req.body.avatar;
  //INSERT INTO `login` (`id`, `fname`, `lname`, `username`, `email`, `avatar`)
    db.query(
      "INSERT INTO login (fname, lname, username, email, avatar) VALUES (?,?,?,?,?)",
      [fname, lname, username, email, avatar],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
          res.send(result);
        }
      }
    );
    
  });
  

app.listen('3333', () =>{
    console.log('Server is running on port 3001');
})