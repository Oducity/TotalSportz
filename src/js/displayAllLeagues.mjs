import getApiData from "./getData.mjs";

export default async function displayAllLeagues() {
  const host = "free-api-live-football-data.p.rapidapi.com";
  const endPoint = "/football-get-all-leagues";
  const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
  const fileType = "application/json";

  //Pass all parameters to the getApiData().
  const data = await getApiData(host, endPoint, myKey, fileType);

    const allLeagues = document.createElement("section");
    allLeagues.setAttribute("id", "all-leagues");
    allLeagues.classList = "all-leagues";
  const h2 = document.createElement("h2");
  h2.innerText = "All Leagues";
  allLeagues.appendChild(h2);

  //Cosuming data returned from getApiData().
  data.response.leagues.forEach((league) => {
    const leagDiv = document.createElement("div");
    leagDiv.setAttribute("class", "league-container");
    leagDiv.innerHTML = `
        <div class="logo-name"><img src="${league.logo}" alt="logo of ${league.name}" width="1" loading="lazy"><span class="league-name">${league.name}</span></div>
        <p><span>Id</span> : <span>${league.id}</span></p>
        <p><span>Local Name</span> : <span>${league.localizedName}</span></p>
        <p><span>Code</span> : <span>${league.ccode}</span></p>
        `;
      allLeagues.appendChild(leagDiv);
      document.getElementById("sport-cards").appendChild(allLeagues);
  });
}
