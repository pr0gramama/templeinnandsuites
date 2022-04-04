const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=4348599&units=imperial&appid=74b0ec3354a2dd7a9a331f611a12fbbb";
let iconsrc= 'https://openweathermap.org/img/w/';

fetch(forecastURL)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {console.log(jsonData)
        jsonData.list.filter(item => item['dt_txt'].includes('18:00:00'))
            
        .forEach((elem,index) => {
            
            document.querySelector('#day'+(index+1)+' + .forecast-icon')
                .innerHTML = '<img alt=\'\' src=\''+iconsrc+elem.weather[0].icon+'.png\'>'
            document.querySelector('#day'+(index+1)+' ~ span')
                .innerHTML = (elem.main.temp)+'&deg;F'
        })
    })

	let days = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ]
    let today = new Date().getDay()
    for (let i = 0; i<5; i++) document.getElementById("day"+(i+1)).innerHTML = days[(today+i)%days.length]