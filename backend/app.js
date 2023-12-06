const express = require("express");
const app = express();
const axios = require("axios");
const mysql = require("mysql");





var db = mysql.createConnection({
    host: '34.170.11.160',
    user: 'root',
    password:'goated4114',
    database:'Trendify',
})

// app.get("/", function(req, response) {
//     response.header('Access-Control-Allow-Origin', '');
//   response.header('Access-Control-Allow-Headers', '');
//   response.header('Access-Control-Request-Headers', '');
//   if (req.method === "OPTIONS") {
//     response.header('Access-Control-Allow-Methods', '');
//     return response.status(200).json({});
//   }

//   //response.query
//   //response.json("hello");
//   if(db.state === 'disconnected'){
//     console.log("errrrr")
//   }
//   db.query("SELECT * FROM Category", (err, result) => {
//     console.log("query : ",  result)
//     // response.json(JSON.stringify(result));
//     response.send(result);


//   })

// });
// app.get("/search", async function(req, response) {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Headers', '*');
//   response.header('Access-Control-Request-Headers', '*');
//   if (req.method === "OPTIONS") {
//     response.header('Access-Control-Allow-Methods', '*');
//     return response.status(200).json({});

//   }
//   const tag = req.query.tag;

//   console.log(tag);
//   response.json(tag);
  



//   // response.json("hello");

//   });

// app.get("/api/get", (require, response) => {
//   const sqlSelect = "SELECT * FROM movie_reviews";
//   db.query(sqlSelect, (err, result) => {
//       response.send(result);
//   });
// });



app.get("/search", async function(req, response)  {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Request-Headers', '*');
  if (req.method === "OPTIONS") {
    response.header('Access-Control-Allow-Methods', '*');
    return response.status(200).json({});
  }

//response.query
//response.json("hello");
var tag = req.query.tag;
var category = req.query.category;
var region = req.query.region;



  if(db.state === 'disconnected'){
    console.log("errrrr")
  }


  db.query(`CALL Result('${tag}', '${category}', '${region}')`, (err, result) => {
    console.log("query : ",  JSON.parse(JSON.stringify(result))[0]);
    response.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
  });
    response.json(JSON.parse(JSON.stringify(result))[0]);
    // response.json(JSON.stringify(result));

  })


});


app.post("/favorites", function(req, response) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Request-Headers', '*');
  if (req.method === "OPTIONS") {
    response.header('Access-Control-Allow-Methods', '*');
    return response.status(200).json({});
  }

//response.query
//response.json("hello");
  var dislike = req.query.dislike;
  var tag = req.query.tag;
  var like  = req.query.like;
  console.log(tag);
  console.log(like);
  console.log(dislike);



  var result2;
  
  db.query(`SELECT rating FROM Favorite WHERE tag_name = '${tag}'`, (err, result2) => {
    console.log("rating : ",  result2)
    console.log("here! -> " + result2);
    // console.log(JSON.parse(JSON.stringify(result2))[0].rating)

  if (!result2.length) {

    console.log("hi");
    // console.log(JSON.parse(JSON.stringify(result2)))
    db.query(`INSERT INTO Favorite(tag_name, rating) VALUES('${tag}', 1)`, (err, result) => {
      response.json("Created new tag entry!");
    })
  } else if (like == 1) {
    console.log("WE WENT IN HERE");
    // result3 = result3 + 1;
    // console.log("result2 inside if " + result2);
    db.query(`UPDATE Favorite SET rating = '${JSON.parse(JSON.stringify(result2))[0].rating}' + 1 WHERE tag_name = '${tag}'`, (err, result) => {
      response.json("Tag Rating Increased!");
      
    })
  } else if (dislike == 1 && JSON.parse(JSON.stringify(result2))[0].rating == 1) {
    db.query(`DELETE FROM Favorite WHERE tag_name = '${tag}'`, (err, result) => {
      response.json("Tag Deleted");
    })

  } else if (dislike == 1) {
    console.log("floppa");
    db.query(`UPDATE Favorite SET rating = '${JSON.parse(JSON.stringify(result2))[0].rating}' - 1 WHERE tag_name = '${tag}'`, (err, result) => {
      response.json("Tag Rating Decreased!");
    })
  }
  console.log("imhere");
  // response.json("testing");
  // db.query("SELECT * FROM Favorite", (err, result) => {
  //   console.log("query : ",  result)
  //   response.json(result);
  // })
 
});
  })

  




app.listen(8000, function() {
    console.log("Server started on port 8000");
});
