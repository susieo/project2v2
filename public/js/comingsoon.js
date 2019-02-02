console.log("funciona")
$(document).ready(function() {
   $( window ).on( "load", function() {
      comingsoon();
    })
    console.log("funciona2")
    function comingsoon()
    {
        console.log("funciona3")
        console.log("comingsoon funciona");
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api-gate2.movieglu.com/filmsComingSoon/?n=10",
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
            $("#soon").append(wrapper);
            }
        
      })
    };
})
      