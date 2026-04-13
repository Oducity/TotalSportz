(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e,t,n,r){let i=`https://${e}${t}`,a={method:`GET`,headers:{"x-rapidapi-key":n,"x-rapidapi-host":e,"Content-Type":r}};try{let e=await fetch(i,a);if(e.ok)return await e.json();{let t=await e.text();console.log(t)}}catch(e){console.error(e)}}function t(){let e=`Last Updated: ${new Date().toLocaleDateString(`en-US`)}`;document.querySelector(`#latestModified`).textContent=e}function n(e){let t=new Date().getFullYear();document.querySelector(`#yearcopyright`).textContent=t.toString()}function r(){document.querySelector(`title`).textContent=`TotalSportz || Home - page`;let e=document.querySelector(`#main`);e.innerHTML=`
  <div class="hero-container">${document.createElement(`img`).src=`../images/hero1.webp`}</div>
  <h1>${document.querySelector(`#home`).textContent}</h1>
  <p class="intro">TotalSportz is a leading company that provide real update of live events of sports around the world including past events.
  We delight ourselves in providing free quality services to you and prioritize your satisfaction. <span> <strong>Note: This is a student project</strong></span></p>
  <div class="events" id="events">
  <section class="fixtures" id="fixtures"></section>
  </div>
  `}async function i(){let t=await e(`therundown-therundown-v1.p.rapidapi.com`,`/events/5527455bb80a5e9884153786aeb5f2b2?include=scores`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`);console.log(t);let n=``,r=``;t.teams.forEach(e=>{e.is_home?n=e.name:r=e.name});let i=document.querySelector(`#fixtures`);i.innerHTML=``;let a=document.createElement(`h2`);a.innerHTML=`
    ${n}&nbsp; <span class="vesus">VS</span> &nbsp;${r}
    `;let o=document.createElement(`div`);o.innerHTML=`
    <p> <span>League:</span><span>${t.schedule.league_name}</span></p>
    <p><span>Event Name:</span> <span>${t.schedule.event_name}</span></p>
    <p><span>Season:</span> <span>${t.schedule.season_type}</span></p>
    <p><span>Level:</span> <span>${t.score.event_status_detail}</span></p>
    <p><span>Year:</span> <span>${t.schedule.season_year}</span></p>
    <p><span>Week:</span> <span>${t.schedule.week_name}</span></p>
    <p><span>Date:</span> <span>${t.schedule.week_detail}</span></p>
    <p class"venue-location"><span>Location:</span> <span>${t.score.venue_name}, &nbsp; ${t.score.venue_location}</span></p>
    <div class="inner-div">
        <table class="score-table">
            <tr>
                <th class="th">Periods</th>
                <th class="th">Home Score</th>
                <th class="th">Away Score</th>
            </tr>
            <tr>
                <td>Period 1</td>
                <td class="td">${t.score.score_home_by_period[0]}</td>
                <td class="td">${t.score.score_away_by_period[0]}</td>
            </tr>
            <tr>
                <td>Period 2</td>
                <td class="td">${t.score.score_home_by_period[1]}</td>
                <td class="td">${t.score.score_away_by_period[1]}</td>
            </tr>
            <tr>
                <td>Period 3</td>
                <td class="td">${t.score.score_home_by_period[2]}</td>
                <td class="td">${t.score.score_away_by_period[2]}</td>
            </tr>
            <tr>
                <td>Period 4</td>
                <td class="td">${t.score.score_home_by_period[3]}</td>
                <td class="td">${t.score.score_away_by_period[3]}</td>
            </tr>
            <tr>
                <td>Full-Time</td>
                <td class="td">${n}: ${t.score.score_home}</td>
                <td class="td">${t.score.score_away} :${r}</td>
            </tr>
        </table>
    </div>
    `,i.appendChild(a),i.appendChild(o)}i(),r(),t(),n();