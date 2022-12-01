// let city_name_selector = document.querySelector('h1');
// let informations_selector = document.querySelector('.informations')

// const options = {method: 'GET'};
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric', options)
//   .then((response) => {
//     return response.json()
//   })
//   .then(response => console.log(response))
//   .then((weather) => {
//     weather.forEach(weather => {
//       create_elements();
//       fillElements(weather.main, weather.country, weather.name, weather.icon);
//       appendElements();
//     });
//   })
// function create_elements(){
//   weathermainnum = document.createElement('h2');
//   weathericon = document.createElement("img");
//   weathercountry = document.createElement('p')
//   weathertext = document.createElement('p');  
// }

// function appendElements() {
//   informations_selector.append(weathermain);
//   informations_selector.append(weathericon);
//   informations_selector.append(weathertext);
// }

// function fillElements(weathericon, weathername, weathermain, weathercountry) {
//   console.log("weather");
//   weather.src = weathericon;
//   city_name_selector = weathername
//   weathermainnum.textContent = weathermain;
//   weathercountry.textContent = weathercountry;
// }

let buttonselector = document.querySelector('button')

buttonselector.addEventListener('click', function() {
  let inputselector = document.querySelector('input')
  let search = inputselector.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric&lang=fr`)
  .then(response => response.json()
)
  .then(json => {
    console.log(json);
      fillElement(json)
    }
  ).catch(
    err => console.log(err)
  )})

function fillElement(json) {
  let city_selector = document.querySelector('.city');
  let weathertemp = document.querySelector('.temp');
  let country_selector = document.querySelector('.country')
  let desc_selector = document.querySelector('.desc')
  let icon_selector = document.querySelector('.icon')

  // let weathericon = document.querySelector('.icon');


  city_selector.textContent = `${json.name}`;
  weathertemp.textContent = `${Math.round(json['main'].temp)}°`
  city_selector = `${json.name}`
  country_selector.textContent = json.sys.country
  desc_selector.textContent = json.weather[0].description
  icon_selector.src = `https://openweathermap.org/img/wn/${json.weather['0'].icon}@2x.png`
  
}

