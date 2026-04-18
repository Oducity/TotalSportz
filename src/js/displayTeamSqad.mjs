import getApiData from "./getData.mjs";

export default async function displayTeamSqad() {
  const host = "sofascore.p.rapidapi.com";
  const endPoint = "/teams/get-squad?teamId=38";
  const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
  const fileType = "application/json";

  //Pass all parameters to the getApiData().
    const data = await getApiData(host, endPoint, myKey, fileType);
    

  const squadSection = document.createElement("section");
  squadSection.setAttribute("id", "team-squad");
  squadSection.classList = "team-squad";
  const h2 = document.createElement("h2");
  h2.innerText = "Team Squad";
  squadSection.appendChild(h2);

  //Cosuming data returned from getAoiData() function.

    data.players.forEach((item) => {
    const member = item.player;
        const splitBirthDate = member.dateOfBirth.split("T");
        let marketValue = "";
        let cur = "";
        if (member.proposedMarketValueRaw) {
            marketValue = member.proposedMarketValueRaw.value;
            cur = member.proposedMarketValueRaw.currency;
        }

    const playerCard = document.createElement("div");
    playerCard.setAttribute("class", "player-card");
    playerCard.style.backgroundColor = member.team.teamColors.primary;
    playerCard.style.color = member.team.teamColors.text;
    playerCard.innerHTML = `
            <p class="player-name">${member.name}</p>
            <p><span>${member.team.name}</span></p>
            <p><span>Sport Type</span> : <span>${member.team.sport.name} </span></p>
            <p><span>Tournament </span> : <span>${member.team.tournament.name} </span></p>
            <p><span>Club Country </span> : <span>${member.team.tournament.category.country.name} </span></p>
            <p><span>Position</span> : <span>${member.position[0]} and ${member.position[1]} </span></p>
            <p><span>Jersey Number</span> : <span>${member.jerseyNumber} </span></p>
            <p><span>Height </span> : <span>${member.height} </span></p>
            <p><span>Date of Birth</span> : <span>${splitBirthDate[0]} </span></p>
            <p><span>Preferred Foot</span> : <span>${member.preferredFoot} </span></p>
            <p><span>Gender </span> : <span>${member.gender} </span></p>
            <p><span>Country of Origin </span> : <span>${member.country.name} </span></p>
            <p><span>proposed Market Value </span> : <span>${marketValue}${cur} </span></p>
        `;
      squadSection.appendChild(playerCard);
      document.querySelector("#sport-cards").appendChild(squadSection);
  });
};