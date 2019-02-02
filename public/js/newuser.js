console.log('new user.js active');
$("#newuser-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newUser = {
    first_name: $("#firstname").val().trim(),
    last_name: $("#lastname").val().trim(),
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
    zipcode:$("#zipcode").val().trim(),
  //  created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log("new user expected", newUser);

 // Send an AJAX POST-request with jQuery
 $.post("/api/new", newUser)
    .then(function(results){
      console.log("results from api ", results);
  })
  console.log(newUser)
 

});
