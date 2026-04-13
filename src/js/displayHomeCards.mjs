import getApiData from "./getData.mjs";
export default async function displayHomeCards() {
    const host = "therundown-therundown-v1.p.rapidapi.com";
    const endPoint = '/events/5527455bb80a5e9884153786aeb5f2b2?include=scores';
    const myKey = 'd5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686';
    const fileType = 'application/json';
    const data = await getApiData(
      host,
      endPoint,
      myKey,
      fileType,
    );

    let homeTeam = "";
    let awayTeam = "";
    data.teams.forEach(team => {
        if (team.is_home) {
            homeTeam = team.name;
        } else {
            awayTeam = team.name;
        }
    });

    const fixturesSection = document.querySelector("#fixtures");
    fixturesSection.innerHTML = "";
    const fixturesHeading = document.createElement("h2");
    fixturesHeading.innerHTML = `
    ${homeTeam}&nbsp; <span class="vesus">VS</span> &nbsp;${awayTeam}
    `;
    
    const div = document.createElement("div");
    div.innerHTML = `
    <p> <span>League:</span><span>${data.schedule.league_name}</span></p>
    <p><span>Event Name:</span> <span>${data.schedule.event_name}</span></p>
    <p><span>Season:</span> <span>${data.schedule.season_type}</span></p>
    <p><span>Level:</span> <span>${data.score.event_status_detail}</span></p>
    <p><span>Year:</span> <span>${data.schedule.season_year}</span></p>
    <p><span>Week:</span> <span>${data.schedule.week_name}</span></p>
    <p><span>Date:</span> <span>${data.schedule.week_detail}</span></p>
    <p class"venue-location"><span>Location:</span> <span>${data.score.venue_name}, &nbsp; ${data.score.venue_location}</span></p>
    <div class="inner-div">
        <table class="score-table">
            <tr>
                <th class="th">Periods</th>
                <th class="th">Home Score</th>
                <th class="th">Away Score</th>
            </tr>
            <tr>
                <td>Period 1</td>
                <td class="td">${data.score.score_home_by_period[0]}</td>
                <td class="td">${data.score.score_away_by_period[0]}</td>
            </tr>
            <tr>
                <td>Period 2</td>
                <td class="td">${data.score.score_home_by_period[1]}</td>
                <td class="td">${data.score.score_away_by_period[1]}</td>
            </tr>
            <tr>
                <td>Period 3</td>
                <td class="td">${data.score.score_home_by_period[2]}</td>
                <td class="td">${data.score.score_away_by_period[2]}</td>
            </tr>
            <tr>
                <td>Period 4</td>
                <td class="td">${data.score.score_home_by_period[3]}</td>
                <td class="td">${data.score.score_away_by_period[3]}</td>
            </tr>
            <tr>
                <td>Full-Time</td>
                <td class="td">${homeTeam}: ${data.score.score_home}</td>
                <td class="td">${data.score.score_away} :${awayTeam}</td>
            </tr>
        </table>
    </div>
    `;
    fixturesSection.appendChild(fixturesHeading);
    fixturesSection.appendChild(div);
    
    const heroImage = document.querySelector("#hero-image");
    heroImage.setAttribute(
      "SRC",
      "https://github.com/Oducity/TotalSportz/blob/main/src/images/hero1.webp",
    );
    heroImage.setAttribute("loading", "lazy");
    heroImage.setAttribute(
      "alt",
      "Hero image of a player happily raising a throphy.",
    );
    heroImage.setAttribute("width", "320");
}
