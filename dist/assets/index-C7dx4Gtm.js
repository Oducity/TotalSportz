(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=`Last Updated: ${new Date().toLocaleDateString(`en-US`)}`;document.querySelector(`#latestModified`).textContent=e}function t(e){let t=new Date().getFullYear();document.querySelector(`#yearcopyright`).textContent=t.toString()}var n=`/assets/hero1-Bv1OS4UL.webp`;function r(){document.querySelector(`title`).textContent=`TotalSportz || Home - page`;let e=document.querySelector(`#main`);e.innerHTML=`
  <div class="hero-container"><img id="hero-image" src=${n} alt="Photo of a player happily raising a trophy." width="320" loading="lazy"></div>
  <h1>${document.querySelector(`#home`).textContent}</h1>
  <p class="intro">TotalSportz is a leading company that provide real update of live events of sports around the world including past events.
  We delight ourselves in providing free quality services to you and prioritize your satisfaction. <span> <strong>Note: This is a student project</strong></span></p>
  <div class="events" id="events">
  <section class="fixtures" id="fixtures"></section>
  </div>
  `}async function i(e,t,n,r){let i=`https://${e}${t}`,a={method:`GET`,headers:{"x-rapidapi-key":n,"x-rapidapi-host":e,"Content-Type":r}};try{let e=await fetch(i,a);if(e.ok)return await e.json();{let t=await e.text();console.log(t)}}catch(e){console.error(e)}}async function a(){let e=await i(`therundown-therundown-v1.p.rapidapi.com`,`/events/5527455bb80a5e9884153786aeb5f2b2?include=scores`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=``,n=``;e.teams.forEach(e=>{e.is_home?t=e.name:n=e.name});let r=document.querySelector(`#fixtures`);r.innerHTML=``;let a=document.createElement(`h2`);a.innerHTML=`
    ${t}&nbsp; <span class="vesus">VS</span> &nbsp;${n}
    `;let o=document.createElement(`div`);o.innerHTML=`
    <p> <span>League:</span><span>${e.schedule.league_name}</span></p>
    <p><span>Event Name:</span> <span>${e.schedule.event_name}</span></p>
    <p><span>Season:</span> <span>${e.schedule.season_type}</span></p>
    <p><span>Level:</span> <span>${e.score.event_status_detail}</span></p>
    <p><span>Year:</span> <span>${e.schedule.season_year}</span></p>
    <p><span>Week:</span> <span>${e.schedule.week_name}</span></p>
    <p><span>Date:</span> <span>${e.schedule.week_detail}</span></p>
    <p class"venue-location"><span>Location:</span> <span>${e.score.venue_name}, &nbsp; ${e.score.venue_location}</span></p>
    <div class="inner-div">
        <table class="score-table">
            <tr>
                <th class="th">Periods</th>
                <th class="th">Home Score</th>
                <th class="th">Away Score</th>
            </tr>
            <tr>
                <td>Period 1</td>
                <td class="td">${e.score.score_home_by_period[0]}</td>
                <td class="td">${e.score.score_away_by_period[0]}</td>
            </tr>
            <tr>
                <td>Period 2</td>
                <td class="td">${e.score.score_home_by_period[1]}</td>
                <td class="td">${e.score.score_away_by_period[1]}</td>
            </tr>
            <tr>
                <td>Period 3</td>
                <td class="td">${e.score.score_home_by_period[2]}</td>
                <td class="td">${e.score.score_away_by_period[2]}</td>
            </tr>
            <tr>
                <td>Period 4</td>
                <td class="td">${e.score.score_home_by_period[3]}</td>
                <td class="td">${e.score.score_away_by_period[3]}</td>
            </tr>
            <tr>
                <td>Full-Time</td>
                <td class="td">${t}: ${e.score.score_home}</td>
                <td class="td">${e.score.score_away} :${n}</td>
            </tr>
        </table>
    </div>
    `,r.appendChild(a),r.appendChild(o)}async function o(){let e=document.querySelector(`title`);e.innerText=``,e.innerText=`TotalSportz || sports page`;let t=document.querySelector(`main`);t.innerHTML=``,t.innerHTML=`
    <label for="search">
    <input type="text" id="search" name"search">
    <button id="search-btn" class"search-btn" type="button">Display Result</button>
    </label>
    <h1 class="sporpage-heading" id="sportpage-heading">Sports</h1>
    <P>
    This page gives everything you need about football events, from list of nations who paticipate in local and international football competitions to leagues and mony more.
    This site can provide information about clubs and players on user's request by using the input field above.
    It also provide fixtures of football events e.t.c.
    </P>
    <div id="sport-cards" class="sport-cards">
        <section id="football-countries" class="football-countries"></sction>
        <section id="team-players" class="team-players"></sction>
        <section></sction>
        <section id="league-teams" class="league-teams"></sction>
        <section id="league-events" class="league-events"></sction>
    </div>
    <dialog>
        <div id="dialog-box" class="dialog-box"></div>
        <button id="close-dialog" class="close-dialog" type="button"></button>
    <dialog>
    `}async function s(){let e=await i(`sofascore.p.rapidapi.com`,`/teams/get-squad?teamId=38`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=document.createElement(`section`);t.setAttribute(`id`,`all-leagues`),t.classList=`all-leagues`;let n=document.createElement(`h2`);n.innerText=`Team Squad`,t.appendChild(n),e.players.forEach(e=>{let n=e.player,r=n.dateOfBirth.split(`T`),i=``,a=``;n.proposedMarketValueRaw&&(i=n.proposedMarketValueRaw.value,a=n.proposedMarketValueRaw.currency);let o=document.createElement(`div`);o.setAttribute(`class`,`player-card`),o.style.backgroundColor=n.team.teamColors.primary,o.style.color=n.team.teamColors.text,o.innerHTML=`
            <p>${n.name}</p>
            <p><span>${n.team.name}</span></p>
            <p><span>Sport Type</span> : <span>${n.team.sport.name} </span></p>
            <p><span>Tournament </span> : <span>${n.team.tournament.name} </span></p>
            <p><span>Club Country </span> : <span>${n.team.tournament.category.country.name} </span></p>
            <p><span>Position</span> : <span>${n.position[0]} and ${n.position[1]} </span></p>
            <p><span>Jersey Number</span> : <span>${n.jerseyNumber} </span></p>
            <p><span>Height </span> : <span>${n.height} </span></p>
            <p><span>Date of Birth</span> : <span>${r[0]} </span></p>
            <p><span>Preferred Foot</span> : <span>${n.preferredFoot} </span></p>
            <p><span>Gender </span> : <span>${n.gender} </span></p>
            <p><span>Country of Origin </span> : <span>${n.country.name} </span></p>
            <p><span>proposed Market Value </span> : <span>${i}${a} </span></p>
        `,t.appendChild(o),document.querySelector(`#sport-cards`).appendChild(t)})}var c=document.querySelectorAll(`a`);c.forEach(e=>{e.addEventListener(`click`,()=>{e.classList.contains(`sports`)?(c.forEach(e=>e.classList.remove(`pathfinder`)),e.classList.add(`pathfinder`),o(),displaySoccerCountries(),s()):e.classList.contains(`home`)&&(c.forEach(e=>e.classList.remove(`pathfinder`)),e.classList.add(`pathfinder`),r(),a())})}),document.getElementById(`home`)&&(document.getElementById(`home`).classList.add(`pathfinder`),r(),a()),e(),t();