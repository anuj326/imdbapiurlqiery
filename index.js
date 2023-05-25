const express = require('express');
const apiResult = require('./controllers/index');
const ejs = require('ejs');


const port = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req , res){
    console.log("main file", apiResult.result)
    
    return res.send("Home page")

})


app.get('/movies', apiResult);

app.listen(port , function(err){
    if(err){
        console.log("Express server is not running",err)
        return;
    }
    console.log("Express Server is running on port :",port)
})