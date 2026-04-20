export async function displaySearchResult(parameter) {
  const para = parameter.toLowerCase();
  const host = "free-api-live-football-data.p.rapidapi.com";
  const endPoint = `/football-get-${para}-all?leagueid=47`;
  const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
  const fileType = "application/json";

  const data = await getApiData(host, endPoint, myKey, fileType);
  const section = document.createElement("section");
  section.setAttribute("class", "fixt");
  section.setAttribute("id", "fixt");
  const h2 = document.createElement("h2");
  h2.innerText = "Standings";
  section.appendChild(h2);

  const table = document.createElement("table");
  table.setAttribute("class", "fixture-table");
  table.id = "fixture-table";
  const headRow = document.createElement("tr");
  headRow.innerHTML = `
        <th>Team Name</th>
        <th>Position</th>
        <th>Points</th>
        <th>Match Played</th>
        <th>Wins</th>
        <th>Draws</th>
        <th>Losses</th>
        <th>Goals</th>
        <th>Concided</th>
        <th>Goals difference</th>`;
  table.appendChild(headRow);

  //Cosuming data returned from getApiData()
  data.response.standing.forEach((club) => {
    const goalsArr = club.scoresStr.split("-");
    const goals = goalsArr[0];
    const conceded = goalsArr[1];

    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td class="name_row"> ${club.shortName}</td>
            <td class="data">${club.idx}</td>
            <td class="data">${club.pts}</td>
            <td class="data">${club.played}</td>
            <td class="data">${club.wins}</td>
            <td class="data">${club.draws}</td>
            <td class="data">${club.losses}</td>
            <td class="data">${goals}</td>
            <td class="data">${conceded}</td>
            <td class="data">${club.goalConDiff}</td>
        `;
    table.appendChild(tr);
  });
  section.appendChild(table);
  document.querySelector("#dialog-box").appendChild(section);
  document.getElementById("close-dialog").innerText = "\u00D7";
}
