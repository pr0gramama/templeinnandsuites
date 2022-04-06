
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980671&lon=-77.100258&units=imperial&appid=7024811e8910a63973752b5b2868b3a1";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    document.querySelector("#current-temp").textContent = jsObject.current.temp;
    

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let desc = jsObject.current.weather[0].description; 
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    desc = desc.split(' ').map(capitalize).join(' ');
    document.querySelector('figcaption').textContent = desc;

    document.querySelector('#humidity').textContent = jsObject.current.humidity;
    
    if (jsObject.alerts) {
        document.querySelector('#alerts').textContent = `Weather Alert: ${jsObject.alerts[0].event}`;
    }
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}