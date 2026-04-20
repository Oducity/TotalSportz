import getApiData from "./getData.mjs";

export default async function displayFormItems() {
    const host = "free-api-live-football-data.p.rapidapi.com";
    const endPoint = "/football-get-all-leagues";
    const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
    const fileType = "application/json";
    
    
    const data = await getApiData(host, endPoint, myKey, fileType);
    const preferredTeam = document.getElementById("preferred-team");

    data.response.leagues.forEach((league) => {
        const option = document.createElement("option");
        option.value = `${league.id} : ${league.name}`;
        option.innerText = league.name;
        preferredTeam.appendChild(option);
     })

}
