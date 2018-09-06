var currentUnit = "celcius";
const weatherBackgrounds = {
  "Clear": "https://static.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg",
  "Rain": "https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg",
  "Snow": "https://static.pexels.com/photos/688660/pexels-photo-688660.jpeg",
  "Clouds": "https://static.pexels.com/photos/105015/pexels-photo-105015.jpeg"
};

function setWeatherBackground(conditions){
  $(".jumbotron").css("background-image", `url("` + weatherBackgrounds[conditions] + `")`);
}

$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const wxAddress = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat.toString() + "&lon=" + long.toString();
      $.getJSON(wxAddress, function(wx){
        $("#currentWeather").html(wx.weather[0].main);
        $("#temperature").html(Math.floor(wx.main.temp));
        $("#tempUnit").html(" &#176;C");
        currentUnit = "celcius";
        setWeatherBackground(wx.weather[0].main);
      });
    })
  };
});
$("#tempSelector").on("click", function(){
  if(currentUnit == "celcius"){
    $("#tempSelector").html("Change to Celcius");
    $("#tempUnit").html(" &#176;F");
    $("#temperature").html(($("#temperature").html() * 9 / 5) + 32);
    currentUnit = "fahrenheit";
  }
  else {
    $("#tempSelector").html("Change to Fahrenheit");
    $("#tempUnit").html(" &#176;C");
    $("#temperature").html(Math.floor(($("#temperature").html() - 32) * 5 / 9),1);
    currentUnit = "celcius";
  }
})

