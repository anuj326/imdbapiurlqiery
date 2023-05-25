const mysql = require('mysql');
  var data;
const apiResult = async function(req, res, next){
    var gener =  req.query.gener;
    var lang =  req.query.lang;
    var query;
    //console.log(gener)
    console.log("user query",req.query)
    if(req.query.gener){
        console.log("user query",req.query.gener)
         query = `select * from imdb_movies WHERE genre LIKE '%${gener}%'`;
    }else if(req.query.lang) {
        console.log("user query",req.query.lang)
         query = `select * from imdb_movies WHERE language LIKE '%${lang}%'`;
    }else{
        query = `select * from imdb_movies`;
    }
   // module.exports.gener = gener;
   // console.log("data from mysql",mysql.data)

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        database: 'imdb'
    })
    
  

    con.connect(function(err){
        if(err){
            console.log("Mysql error",err)
            return;
        }
        console.log("Connected to Database")
    })
    
    
 con.query(query, function(err, data){
        if(err){
            console.log("Mysql error",err)
            return;
        }else{
            console.log("result form databse", data)
            res.render('home',{
                title:"node js data",
                acttion: 'list',
                sampleData: data
            })
            return data;
        }
      // result = JSON.stringify(result);
       
   

       
       
    })
   
}

module.exports = apiResult;