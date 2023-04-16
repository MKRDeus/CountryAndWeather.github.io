const form = document.querySelector('#searcher-form');
const nameCountry = document.querySelector('#searcher-input');

/************************************************************/
const bandera = document.querySelector("#flag");
const nombrePais = document.querySelector("#name");
const capital = document.querySelector("#capital");
const poblacion = document.querySelector("#population");
const region = document.querySelector("#region");
const temperatura = document.querySelector("#temperature");
const clima = document.querySelector("#weather");
/************************************************************/
const caracteristicas = document.querySelector("#caracteritics");
/************************************************************/
let finalURL;
let WeatherURL;

//regex solo letras y espacios
const COUNTRY_REGEX = /^[A-Za-z ]*$/;

const validation = (validation, input) => {
    if (validation) {
        input.classList.remove('wrong');
        input.classList.add('right');
    } else {
        input.classList.add('wrong');
        input.classList.remove('right');
    }
}

nameCountry.addEventListener('input', e => {
    const countryValidation = COUNTRY_REGEX.test(e.target.value);
    validation(countryValidation, nameCountry);
});


nameCountry.addEventListener('input', async function () {
    const country = [nameCountry.value.length];
    //const countryname = nameCountry.value;
    //call api when are more of 4 letters and with a limit of 56 letters
    if (country >= 4 && country <= 56) {
        finalURL = `https://restcountries.com/v3.1/name/${nameCountry.value}?fullText=true`;
        console.log(finalURL);
        fetch(finalURL).then((response) => response.json()).then((data) => {
            console.log(data);
            //para 1 pais
            caracteristicas.classList.remove("hide");
            nombrePais.innerHTML = data[0].name.common;
            capital.innerHTML = data[0].capital[0];
            poblacion.innerHTML = data[0].population;
            region.innerHTML = data[0].region;
            /**********************************************/
            //console.log(data[0].name.common);
            //console.log(data[0].capital[0]);
            //console.log(data[0].population);
            //console.log(data[0].region);
            /*para menos de 10 paises*/
            console.log(data[0].flags.svg);
            console.log(data[0].latlng[0]);
            console.log(data[0].latlng[1]);
        })   
    }
})

