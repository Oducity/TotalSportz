import getApiData from "./getData.mjs";
import displayAllLeagues from "./displayAllLeagues.mjs";

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

export default async function displaySoccerCountries() {
  //Set all required API parameters.
  const host = "free-api-live-football-data.p.rapidapi.com";
  const endPoint = "/football-get-all-countries";
  const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
  const fileType = "application/json";

  //Pass all parameters to the getApiData().
  const data = await getApiData(host, endPoint, myKey, fileType);
  console.log(data);

  const allCountries = document.querySelector("#football-countries");
  allCountries.innerHTML = ""; //clean or emptied the section element
  const h2 = document.createElement("h2");
  h2.innerText = "All Soccer Nations";
  allCountries.appendChild(h2);

  //Cosume the returned data from getApiData.
  data.response.countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `<p><span class="country-name"> ${country.name} </span> : <span class="country-code"> ${country.ccode}</span></p>`;
    allCountries.appendChild(countryDiv);
  });
    displayAllLeagues();
    displayStanding();
}

/************************ Past results ************************/

export async function displayStanding() {
    const host = "free-api-live-football-data.p.rapidapi.com";
    const endPoint = "/football-get-standing-all?leagueid=47";
    const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
    const fileType = "application/json";

    const data = await getApiData(host, endPoint, myKey, fileType);
    const section = document.createElement("section");
    section.setAttribute("class", "fixtures");
    section.setAttribute("id", "fixtures");
    const h2 = document.createElement("h2");
    h2.innerText = "Fixture";
    document.querySelector("main").appendChild(h2);

    console.log(data);

    data.response.standing.forEach((club) => {
        const goalsArr = club.scoresStr.split("-");
        const goals = goalsArr[0];
        const conceded = goalsArr[1];
        const div = document.createElement("div");
        div.setAttribute("class", "fixture-box");
        div.id = "fixture-box";
        div.innerHTML = `
            <P class="club-name"> ${club.shortName}</p>
            <p><span>Position</span> : <span>${club.idx}</span></p>
            <p><span>Points</span> : <span>${club.pts}</span></p>
            <p><span>Number Match Played</span> : <span>${club.played}</span></p>
            <p><span>Wins</span> : <span>${club.wins}</span></p>
            <p><span>Draws</span> : <span>${club.draws}</span></p>
            <p><span>Losses</span> : <span>${club.losses}</span></p>
            <p><span>Goals</span> : <span>${goals}</span></p>
            <p><span>Concided</span> : <span>${conceded}</span></p>
            <p><span>Goals-difference</span> : <span>${club.goalConDiff}</span></p>
        `;
        section.appendChild(div);
        document.querySelector("main").appendChild(section);
    });
};