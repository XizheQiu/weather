var pageheader = $("#message")[0];
var button = $("#my-button")[0];
var inputBox = $("#inputBox")[0];
var weather;
var weatherCode;
var weatherCity;
button.addEventListener("click", function () {
    sendRequest(function (Weather) {
        changeUI();
    });
});
document.getElementById("formID")
    .addEventListener("submit", function (event) {
    sendRequest(function (Weather) {
        changeUI();
    });
    event.preventDefault();
}, false);
function sendRequest(callback) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast/weather?q=" + document.getElementById("inputBox").value + "&APPID=4a7f580dbbe87011631f847dbce5df69",
        type: "GET",
    })
        .done(function (data) {
        weather = data.list[0].weather[0].description;
        weatherCode = data.list[0].weather[0].id;
        weatherCity = data.city.name + " " + data.city.country;
        callback(weather);
    })
        .fail(function (error) {
        pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
        console.log(error.getAllResponseHeaders());
    });
}
function changeUI() {
    pageheader.innerHTML = weatherCity + " - " + weather;
    if (weatherCode <= 299) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/11d.png";
        document.body.style.backgroundImage = "url('http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg')";
    }
    else if (weatherCode <= 399) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/09d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)), url('https://i.ytimg.com/vi/MR47cSm4OWk/maxresdefault.jpg')";
    }
    else if (weatherCode <= 504) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/10d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)), url('https://i.ytimg.com/vi/MR47cSm4OWk/maxresdefault.jpg')";
    }
    else if (weatherCode == 511) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/13d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('http://cdn.natgeotv.com.au/videos/thumbnails/video-freezing-rain.jpg?v=14&azure=false&scale=both&width=1600&height=900&mode=crop')";
    }
    else if (weatherCode <= 599) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/09d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)), url('https://i.ytimg.com/vi/MR47cSm4OWk/maxresdefault.jpg')";
    }
    else if (weatherCode <= 699) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/13d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('http://cdn.natgeotv.com.au/videos/thumbnails/video-freezing-rain.jpg?v=14&azure=false&scale=both&width=1600&height=900&mode=crop')";
    }
    else if (weatherCode <= 799) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/50d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://i.ytimg.com/vi/UtXgVs7Fa0w/maxresdefault.jpg')";
    }
    else if (weatherCode == 800) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/01d.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url('http://www.punjabigraphics.com/images/158/Star-Fish-Beach-View-Wallpaper.jpg')";
    }
    else if (weatherCode == 801) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/02d.png";
        document.body.style.backgroundImage = "url('http://www.mrwallpaper.com/wallpapers/colorful-cloudy-sky.jpg')";
    }
    else if (weatherCode == 802) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/03d.png";
        document.body.style.backgroundImage = "url('http://www.mrwallpaper.com/wallpapers/colorful-cloudy-sky.jpg')";
    }
    else if (weatherCode <= 804) {
        document.getElementById('weatherPic').src = "http://openweathermap.org/img/w/04d.png";
        document.body.style.backgroundImage = "url('http://www.mrwallpaper.com/wallpapers/colorful-cloudy-sky.jpg')";
    }
    document.getElementById("inputBox").value = "";
    document.getElementById("inputBox").placeholder = "Please enter another city if you wish :)";
}
