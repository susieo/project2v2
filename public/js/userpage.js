$(document).ready(function() {
  var userTestEmail = 'test@test.com';
  $( window ).on( "load", function() {
   // $("input:hidden#recipes").val("pizza");
   //$("#recipes").val("");
    //console.log("#cuisine");
  movies();
  })
  function movies()
  {
 
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
    "method": "GET",
    "headers": {
      "api-version": "v200",
      "Authorization": "Basic TkFUSV8wOmx5d3Q5c09POWgxTQ==  ",
      "client": "NATI_0",
      "x-api-key": "J0VfBsAF476tEDrCnMMEW568wZ86s6rfaCHgZTsm",
      "device-datetime": "2018-12-04T04:16:37.406Z",
      "territory": "US",
      "Geolocation": "Use semicolon to separate LAT;LON",
      "user_id": "{{user_id}}",
      "app_version": "Version of your app, eg 1.0.5 (Optional)",
      "app_platform": "Platform of your app, eg iOS (Optional)",
      "language": "{{language}}",
      "cache-control": "no-cache",
      // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var result = response.films;
    console.log(result[0].film_name);
    //var image = $("<img>").attr("src", result[0].image_url);
        // $("#image").append(image);
        for (var i = 0; i< result.length; i++)
          {
            var wrapper = $("<div class='todo'>"); 
            var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
            var button = $("<button class='like-button'>Like</button>").attr("data-name", result[i].film_name);
            button.attr("data-trailer", result[i].film_trailer);
             console.log("button ", button);
             wrapper.append(video);
             wrapper.append(button);
          $("#search-content").append(wrapper);
          }
      
    })
    $("#search-content").on("click",".like-button", function(e){
      event.preventDefault();
      //console.log("this was clicked ", this);
      // Make a new object
       var newMovie = {
        email: userTestEmail,
        film_name: $(this).attr("data-name"),
        film_trailer: $(this).attr("data-trailer")
  };

  console.log("new user expected", newMovie);
  // Send an AJAX POST-request with jQuery
 $.post("/api/movie-like", newMovie)
    .then(function(results){
      console.log("results from api ", results);
  })
      
      
      
      
      // console.log("this was clicked ", this);
      // console.log($(this).attr("data-name"));
      // console.log($(this).attr("data-trailer"));
     // $(this).css("background", "red");
      //ajax call to database 
      //userTestEmail

     });
  }

});

//  function comingsoon()
//  {
//    console.log("comingsoon funciona")
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
//     "method": "GET",
//     "headers": {
//       "api-version": "v200",
//       "Authorization": "Basic TkFUSV8wOmx5d3Q5c09POWgxTQ==  ",
//       "client": "NATI_0",
//       "x-api-key": "J0VfBsAF476tEDrCnMMEW568wZ86s6rfaCHgZTsm",
//       "device-datetime": "2018-12-04T04:16:37.406Z",
//       "territory": "US",
//       "Geolocation": "Use semicolon to separate LAT;LON",
//       "user_id": "{{user_id}}",
//       "app_version": "Version of your app, eg 1.0.5 (Optional)",
//       "app_platform": "Platform of your app, eg iOS (Optional)",
//       "language": "{{language}}",
//       "cache-control": "no-cache",
//       // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
//     }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     var result = response.films;
//     console.log(result[0].film_name);
//     //var image = $("<img>").attr("src", result[0].image_url);
//         // $("#image").append(image);
//         for (var i = 0; i< result.length; i++)
//           {
//             var wrapper = $("<div class = 'todo'>"); 
//             var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
//             var button = $("<button class='like-button'>Like</button>").attr("data-name", result[i].film_name);
//             button.attr("data-trailer", result[i].film_trailer);
//              console.log("button ", button);
//              wrapper.append(video);
//              wrapper.append(button);
//           $("#search-content").append(wrapper);
//           }
      
//     })
//   }
  // function nearby()
  // {
  //   console.log("nearby funciona")
  //  var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
  //   "method": "GET",
  //   "headers": {
  //     "api-version": "v200",
  //     "Authorization": "Basic TkFUSTpsQk9oOExJVVV3bUM=",
  //     "client": "NATI",
  //     "x-api-key": "MoWyZ9j1vi7WuBrn5WA8h8pPY8nCE6LyKhwzBqYc",
  //     "device-datetime": "2018-12-04T04:16:37.406Z",
  //     "territory": "US",
  //     "Geolocation": "Use semicolon to separate LAT;LON",
  //     "user_id": "{{user_id}}",
  //     "app_version": "Version of your app, eg 1.0.5 (Optional)",
  //     "app_platform": "Platform of your app, eg iOS (Optional)",
  //     "language": "{{language}}",
  //     "cache-control": "no-cache",
  //     // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
  //    }
  //  }
   
  //  $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   var result = response.films;
  //   console.log(result[0].film_name);
  //   //var image = $("<img>").attr("src", result[0].image_url);
  //       // $("#image").append(image);
  //       for (var i = 0; i< result.length; i++)
  //         {
  //           var wrapper = $("<div>"); 
  //           var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
  //           var button = $("<button class='like-button'>Like</button>").attr("data-name", result[i].film_name);
  //           button.attr("data-trailer", result[i].film_trailer);
  //            console.log("button ", button);
  //            wrapper.append(video);
  //            wrapper.append(button);
  //         $("#search-content").append(wrapper);
  //         }
      
  //   })
  // }

   //***botones****/
  //  $("#comingsoon").on("click", function(event) {
  //   event.preventDefault();
  //   comingsoon();   
  
  // });
  // $("#nearby").on("click", function(event) {
  //   event.preventDefault();
  //   nearby();
  
  // });



  
       
