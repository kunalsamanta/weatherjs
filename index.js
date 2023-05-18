let  weather= {
    apiKey:"d91432f4b4c408925202d2793e91ed35",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displyWeather(data));
        },
        displyWeather: function (data){ 

        }
};

   