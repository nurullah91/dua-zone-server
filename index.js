const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const port = process.env.PORT || 3000;
const cors = require('cors');
const app = express();


// SQLite database connection
const database = new sqlite3.Database('./dua_main.sqlite');


// middleware
app.use(express.json());
app.use(cors());


// API's
app.get('/api/categories', (req, res)=> {
    database.all('SELECT * FROM category', (err, rows) => {
        if(err){
            res.status(500).json({error:err.message});
            return;
        }
        res.json(rows);
    })
})


app.listen(port, ()=>{
    console.log(`Dua zone server is running on the port ${port}`);
})

