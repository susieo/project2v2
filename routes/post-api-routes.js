// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var DB = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // // Get all chirps
  // app.get("/api/all", function(req, res) {

  //   // Finding all Chirps, and then returning them to the user as JSON.
  //   // Sequelize queries are asynchronous, which helps with perceived speed.
  //   // If we want something to be guaranteed to happen after the query, we'll use
  //   // the .then function
  //   Chirp.findAll({}).then(function(results) {
  //     // results are available to us inside the .then
  //     res.json(results);
  //   });

  // });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    // app.post("/api/posts", function(req, res) {
      DB.User.create(req.body).then(function(dbPost) {
        res.json(dbPost);
      });
    

   // console.log("User Data:");
    //console.log(req.body);
    //res.json(req.body);
  //   User.create({
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email: req.body.email,
  //     password: req.body.password,
  //     zipcode: req.body.zipcode,
  //     created_at: req.body.created_at
  //   }).then(function(results) {
  //     // `results` here would be the newly created chirp
  //     res.end();
  //   });

   });

   // Add a chirp
  app.post("/api/movie-like", function(req, res) {
    // app.post("/api/posts", function(req, res) {
      // var title = req.body.film_name;
      // var trailer = req.body.film_trailer;
      // var userEmail = req.body.email;
      // console.log(title, trailer, userEmail);

      DB.Movie.create(req.body).then(function(dbPost) {
        res.json(dbPost);
      });
    

   });
   app.post('/login',passport.authenticate('local', { successRedirect: '/',
                                  failureRedirect: '/login',
                                   failureFlash: true })
);

};