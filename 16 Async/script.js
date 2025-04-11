'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal
//https://countries-api-836d.onrender.com/countries/



// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

const renderCountry = function (data, className = '') {

    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


/*
const getCountryAndNeighbour = function (country) {
    // AJAX call to country 1

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

console.log(request.responseText); // Will be 'undefined' at this point

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data); // Will be the response from the server

    // Render country 1
    renderCountry(data);
    const [neighbour] = data.borders;
    console.log(neighbour);

    if(!neighbour) return;

    // AJAX call to country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2); // Will be the response from the server

        // Render country 2
        renderCountry(data2, 'neighbour');
    });

})
}

getCountryAndNeighbour('usa');
//getCountryData('USA');


//const request = fetch('https://restcountries.com/v2/name/portugal');
//console.log(request); // Will be a Promise object

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);
    //countriesContainer.style.opacity = 1;
}

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    }
    );
}




const getCountryData = function(country){ 
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
        
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];

        if (!neighbour) throw new Error('No neighbour found!');
        // Country 2

        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found')
      
    } )
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥 ! ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
}


btn.addEventListener('click', function () {
    getCountryData('japan');
});
// getCountryData
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err} 💥💥💥`));


const s = "Hello World";

const s1 = s.split(" ").reverse().join(" ");
console.log(s1); // World Hello
*/

// VIDEO 274 : CONSUMING PROMISES WITH ASYNC/AWAIT

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


const whereAmI = async function () {
    try{
const pos = await getPosition();
const { latitude: lat, longitude: lng } = pos.coords;           

const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
if(!resGeo.ok) throw new Error('Problem getting location data');

const dataGeo = await resGeo.json();

const countryName = 'USA';
const res = await fetch(`https://restcountries.com/v2/name/${countryName}`);
if(!res.ok) throw new Error('Problem getting country data');

const data = await res.json();
renderCountry(data[0]);
return `You are in ${dataGeo.city}, ${dataGeo.countryName}`; 

    }catch(err){
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥 ! ${err.message}. Try again!`);

}
}

console.log("1. Getting Location");
//const city = whereAmI();  // Will log a Promise object
console.log("3. Finished Getting Location");

console.log("----FIRST----")

// Better way

whereAmI().then(city => console.log(city))
.catch(err => console.error(err))
.finally(() => {
    countriesContainer.style.opacity = 1;
});
console.log("----SECOND----")