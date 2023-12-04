const express = require("express");
const app = express();





app.get("/favorited", async function(req, response) {
    response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Request-Headers', '*');
  if (req.method === "OPTIONS") {
    response.header('Access-Control-Allow-Methods', '*');
    return response.status(200).json({});

  }

  response.query
  response.json("hello");

  });

  app.get("/search", async function(req, response) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Request-Headers', '*');
  if (req.method === "OPTIONS") {
    response.header('Access-Control-Allow-Methods', '*');
    return response.status(200).json({});

  }
  const tag = req.query.tag;

  console.log(tag);
  response.json(tag);
  



  // response.json("hello");

  });

    


app.listen(8000, function() {
    console.log("Server started on port 8000");
  });