const weather = {
    fetchWeather (city) {
        fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=b9ed0766259ce432b0762d83701802c6')
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    },

    displayWeather(data) {
        const {name} = data
        const {temp, feels_like, humidity} = data.main
        const {description, icon} = data.weather[0]
        const {speed} = data.wind
        const {visibility} = data

        document.querySelector('.weather').innerText = 'Weather in: ' + name
        document.querySelector('.temperature').innerText = temp + ' ℃'
        document.querySelector('.description').innerText = description
        document.querySelector('.feels-like').innerText = 'Feels like: ' + feels_like + ' ℃'
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + ' %'
        document.querySelector('.wind').innerText = 'Wind: ' + speed + ' km/h'
        document.querySelector('.visibility').innerText = 'Visibility: ' + visibility + ' km'
        document.getElementById('iconn').src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },

    search() {
        this.fetchWeather(document.querySelector('.text').value)
    }

}

document.querySelector('.button').addEventListener('click', function() {
    weather.search()
})

document.querySelector('.text').addEventListener('keydown', function(e) {
if (e.key == 'Enter') {
    weather.search()
}
})

weather.fetchWeather("Los Angeles")

document.cookie = "witcher=Geralt; SameSite=None; Secure"









