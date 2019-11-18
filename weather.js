// https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22
// https://api.openweathermap.org/data/2.5/weather?zip=53590,us&appid=de4a8aa7df5e6585df79b29409ed2615

// api key:de4a8aa7df5e6585df79b29409ed2615


$("#btn").click(function () {

    //variable for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'de4a8aa7df5e6585df79b29409ed2615';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;

    console.log(apiURL);

    $.get(apiURL, function(responseFromOW){

        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("description:", responseFromOW.weather[0].description);

        var temp = responseFromOW.main.temp;
        var citY = responseFromOW.name;
        var description = responseFromOW.weather[0].description;
    });



});
