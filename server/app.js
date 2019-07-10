const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
require("dotenv").config();

const app = express();
//const url = process.env.MONGOLAB_URI;

mongoose.connect(
  "mongodb://charlotte:test123@ds347917.mlab.com:47917/guate-casa"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    //this says really schema: schema but since it is the same word can just use schema
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
