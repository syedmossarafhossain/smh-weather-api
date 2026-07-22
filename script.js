const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');


const weatherInfoSection = document.querySelector('.weather-info');
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

const apiKey = '0f165508335f879c5c06c610efe253c9';

// BUTTON CLICK
searchBtn.addEventListener('click', () =>{
    if (cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})


// SEARCH INPUT
cityInput.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter' && cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
    
})


// FETCH DATA
async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    return response.json();
}
