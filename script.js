const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.use('/', require('./routes/router'));

app.listen(2000, (err) => {
    if(!err){
        console.log("Server is running on http://localhost:2000");
        console.log("Server is running....")
    }else{
        console.log("Error starting server:", err);
    }
});
