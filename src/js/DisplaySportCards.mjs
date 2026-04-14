import getApiData from "./getData.mjs";


//export default async function footballCountries() {
//
//
//    //Cosume the returned data from getApiData.
//    const soccerCountries = await getApiData()
//
//};

//export default async function displayFixtures() {
//    
//}

//
//
//
//
//
//
//export default async function displayPastScores() {
//    const host = "";
//    const endPoint = '';
//    const myKey = '';
//    const fileType = 'application/json';
//    const data = await getApiData(host, endPoint, myKey, fileType);
//    console.log(data);
//};


export default async function displaySoccerCountries() {
    
    //Set all required API parameters.
    const host = "free-api-live-football-data.p.rapidapi.com";
    const endPoint = '/football-get-all-countries';
    const myKey = 'd5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686';
    const fileType = 'application/json';

    //Pass all parameters to the getApiData().
    const data = await getApiData(
        host,
        endPoint,
        myKey,
        fileType,
    );
    console.log(data);

    const allCountries = document.querySelector("#football-countries");
    allCountries.innerHTML = ""; //clean or emptied the section element
    const h2 = document.createElement("h2");
    h2.innerText = "All Soccer Nations"
    allCountries.appendChild(h2);

    //Cosume the returned data from getApiData.
    data.response.countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<p><span class="country-name"> ${country.name} </span> : <span class="country-code"> ${country.ccode}</span></p>`;
        allCountries.appendChild(countryDiv);
    });

    displayAllLeagues();
};

async function displayAllLeagues() {
    const host = "free-api-live-football-data.p.rapidapi.com";
    const endPoint = '/football-get-all-leagues';
    const myKey = 'd5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686';
    const fileType = 'application/json';

    //Pass all parameters to the getApiData().
    const data = await getApiData(
        host,
        endPoint,
        myKey,
        fileType,
    );
    
    const allLeagues = document.querySelector("#all-leagues");
    allLeagues.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.innerText = "All Leagues";
    allLeagues.appendChild(h2);

    //Cosuming data returned from getApiData().
    data.response.leagues.forEach((league) => {
        const leagDiv = document.createElement("div");
        leagDiv.setAttribute("class", "league-container");
        leagDiv.innerHTML = `
        <div class="logo-name"><img src="${league.logo}" alt="logo of ${league.name}" width="70" loading="lazy"><span class="league-name">${league.name}</span></div>
        <p><span>Id</span> : <span>${league.id}</span></p>
        <p><span>Local Name</span> : <span>${league.localizedName}</span></p>
        <p><span>Code</span> : <span>${league.ccode}</span></p>
        `;
        allLeagues.appendChild(leagDiv);
    });
};