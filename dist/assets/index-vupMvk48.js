(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=`Last Updated: ${new Date().toLocaleDateString(`en-US`)}`;document.querySelector(`#latestModified`).textContent=e}function t(e){let t=new Date().getFullYear();document.querySelector(`#yearcopyright`).textContent=t.toString()}var n=`/assets/hero1-Bv1OS4UL.webp`;function r(){document.querySelector(`title`).textContent=`TotalSportz || Home - page`;let e=document.querySelector(`#main`);e.innerHTML=`
  <div class="hero-container"><img id="hero-image" src=${n} alt="Photo of a player happily raising a trophy." width="320" loading="lazy"></div>
  <h1>${document.querySelector(`#home`).textContent}</h1>
  <p class="intro">TotalSportz is a leading company that provide real update of live events of sports around the world including past events.
  We delight ourselves in providing free quality services to you and prioritize your satisfaction. <span> <strong>Note: This is a student project</strong></span></p>
  <div class="events" id="events">
  <section class="fixtures" id="fixtures"></section>
  </div>
  `}async function i(e,t,n,r){let i=`https://${e}${t}`,a={method:`GET`,headers:{"x-rapidapi-key":n,"x-rapidapi-host":e,"Content-Type":r}};try{let e=await fetch(i,a);if(e.ok)return await e.json();{let t=await e.text();console.log(t)}}catch(e){console.error(e)}}async function a(){let e=document.querySelector(`title`);e.innerText=``,e.innerText=`TotalSportz || sports page`;let t=document.querySelector(`main`);t.innerHTML=``,t.innerHTML=`
    <h1 class="sporpage-heading" id="sportpage-heading">Sports</h1>
    <P>
    This page gives everything you need about football events, from list of nations who paticipate in local and international football competitions to leagues and mony more.
    This site can provide information about clubs and players on user's request by using the input field above.
    It also provide fixtures of football events e.t.c.
    </P>
    <div id="sport-cards" class="sport-cards">
    </div>
    <dialog id="mymodal">
        <div id="dialog-box" class="dialog-box"></div>
        <button id="close-dialog" class="close-dialog" type="button"></button>
    <dialog>
    `}async function o(){let e=await i(`free-api-live-football-data.p.rapidapi.com`,`/football-get-all-countries`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`);console.log(e);let t=document.createElement(`section`);t.setAttribute(`class`,`all-countries`),t.setAttribute(`id`,`all-countries`),t.innerHTML=``;let n=document.createElement(`h2`);n.innerText=`All Soccer Nations`,t.appendChild(n),e.response.countries.forEach(e=>{let n=document.createElement(`div`);n.innerHTML=`<p><span class="country-name"> ${e.name} </span> : <span class="country-code"> ${e.ccode}</span></p>`,t.appendChild(n)}),document.querySelector(`#sport-cards`).appendChild(t)}async function s(){let e=await i(`free-api-live-football-data.p.rapidapi.com`,`/football-get-standing-all?leagueid=47`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=document.createElement(`section`);t.setAttribute(`class`,`fixtures`),t.setAttribute(`id`,`fixtures`);let n=document.createElement(`h2`);n.innerText=`Fixture`,t.appendChild(n),e.response.standing.forEach(e=>{let n=e.scoresStr.split(`-`),r=n[0],i=n[1],a=document.createElement(`div`);a.setAttribute(`class`,`fixture-box`),a.id=`fixture-box`,a.innerHTML=`
            <P class="club-name"> ${e.shortName}</p>
            <p><span>Position</span> : <span>${e.idx}</span></p>
            <p><span>Points</span> : <span>${e.pts}</span></p>
            <p><span>Number Match Played</span> : <span>${e.played}</span></p>
            <p><span>Wins</span> : <span>${e.wins}</span></p>
            <p><span>Draws</span> : <span>${e.draws}</span></p>
            <p><span>Losses</span> : <span>${e.losses}</span></p>
            <p><span>Goals</span> : <span>${r}</span></p>
            <p><span>Concided</span> : <span>${i}</span></p>
            <p><span>Goals-difference</span> : <span>${e.goalConDiff}</span></p>
        `,t.appendChild(a)}),document.querySelector(`#sport-cards`).appendChild(t)}async function c(){let e=await i(`free-api-live-football-data.p.rapidapi.com`,`/football-get-all-leagues`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=document.createElement(`section`);t.setAttribute(`id`,`all-leagues`),t.classList=`all-leagues`;let n=document.createElement(`h2`);n.innerText=`All Leagues`,t.appendChild(n),e.response.leagues.forEach(e=>{let n=document.createElement(`div`);n.setAttribute(`class`,`league-container`),n.innerHTML=`
        <div class="logo-name"><img src="${e.logo}" alt="logo of ${e.name}" width="1" loading="lazy"><span class="league-name">${e.name}</span></div>
        <p><span>Id</span> : <span>${e.id}</span></p>
        <p><span>Local Name</span> : <span>${e.localizedName}</span></p>
        <p><span>Code</span> : <span>${e.ccode}</span></p>
        `,t.appendChild(n)}),document.getElementById(`sport-cards`).appendChild(t)}async function l(){let e=await i(`sofascore.p.rapidapi.com`,`/teams/get-squad?teamId=38`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=document.createElement(`section`);t.setAttribute(`id`,`team-squad`),t.classList=`team-squad`;let n=document.createElement(`h2`);n.innerText=`Team Squad`,t.appendChild(n),e.players.forEach(e=>{let n=e.player,r=n.dateOfBirth.split(`T`),i=``,a=``;n.proposedMarketValueRaw&&(i=n.proposedMarketValueRaw.value,a=n.proposedMarketValueRaw.currency);let o=document.createElement(`div`);o.setAttribute(`class`,`player-card`),o.style.backgroundColor=n.team.teamColors.primary,o.style.color=n.team.teamColors.text,o.innerHTML=`
            <p class="player-name">${n.name}</p>
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
        `,t.appendChild(o),document.querySelector(`#sport-cards`).appendChild(t)})}async function u(){let e=document.querySelector(`main`);e.innerHTML=`
        <h1>${document.querySelector(`#contact-Us`).textContent}</h1>
        <p>Register with us to get latest update on sport. Simple, enter your first name, last name and your email address. After that, select your preferred league of interest and hit the register me button. Boom, you start receiving updates at your convenience. It's as simple as that.</p>
        <div class="form-container">
            <form action="../thanks.html" method="GET" id="reg-form" class="reg-form">
                <h2>Registration Form</h2>
                <fieldset>
                    <legend>Customer's Information</legend>
                    <Label for="firstname" class="fname-label">
                        <span class="fname-span">Your First Name: <strong class="req">&#10033;</strong></span>
                        <input type="text" id="firstname" name="firstname" placeholder="Please Enter You Given Name" autocomplete="given-name" title="E.g; Dr." required>
                    </label>
                    <label for="lastname">
                        <span class="lname-span">Your Last Name: <strong class="req">&#10033;</strong></span>
                        <input type="text" id="lastname" name="lastname" class="last-name" placeholder="Please Enter You Family Name" autocomplete="family-name" title="No title" required>
                    </label>
                    <label for="email" class="email=label">
                        <span class="email-span">Your Email: <strong class="req">&#10033;</strong></span>
                        <input type="email" class="email" id="email" name="email" title="email" autocomplete="email" placeholder="example@email.com" required>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Teams Option</legend>
                    <label for="preferredteam">
                        <span>Select Your Prefered League:<strong class="req">&#10033;</strong></span>
                        <select id="preferred-team" name="preferred-team" class="preferred-team">
                            <option>Select Your Team</option>
                        </select>
                    </label>
                </fieldset>
                <label for="submitted">
                    <button type="submit" name="submit" class="submit" id="form-submit">Register Me</button>
                </label>
            </form>
        </div>
    `}async function d(){let e=await i(`free-api-live-football-data.p.rapidapi.com`,`/football-get-all-leagues`,`d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686`,`application/json`),t=document.getElementById(`preferred-team`);e.response.leagues.forEach(e=>{let n=document.createElement(`option`);n.value=`${e.id} : ${e.name}`,n.innerText=e.name,t.appendChild(n)})}async function f(e){document.getElementById(`reg-form`).addEventListener(`submit`,e=>{e.preventDefault();let t={firstName:document.getElementById(`firstname`).value,lastName:document.getElementById(`lastname`).value,email:document.getElementById(`email`).value,team:document.getElementById(`preferred-team`).value};localStorage.setItem(`userData`,JSON.stringify(t))})}async function p(){let e=localStorage.getItem(`userData`),t=document.getElementById(`main`);t.innerHTML=``;let n=document.createElement(`h1`);n.textContent=`Registration Completed`;let r=document.createElement(`p`);if(r.innerText=`The following are information you provided during your registration.`,t.appendChild(n),t.appendChild(r),e){let n=JSON.parse(e);console.log(n);let r=document.createElement(`p`);r.setAttribute(`class`,`first-name`),r.innerHTML=`<span>First Name</span>: <span>${n.firstName}`;let i=document.createElement(`p`);i.setAttribute(`class`,`last-name`),i.innerHTML=`<span>Last Name</span>: </span>${n.lastName}</span>`;let a=document.createElement(`P`);a.setAttribute(`class`,`email`),a.innerHTML=`<span>Email</span>: <span>${n.email}</span>`;let o=document.createElement(`P`);o.setAttribute(`class`,`team`),o.innerHTML=`<span>Preferred Team</span>: <span>${n.team}`,t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(o),t.classList.add(`formdata`)}else t.innerHTML=`<p><strong> No data recieved! </strong> </P`}document.getElementById(`search-btn`),document.getElementById(`mymodal`),document.getElementById(`close-dialog`);var m=document.querySelectorAll(`a`);m.forEach(e=>{e.addEventListener(`click`,()=>{e.classList.contains(`sports`)?(m.forEach(e=>e.classList.remove(`pathfinder`)),e.classList.add(`pathfinder`),a(),o(),s(),c(),l()):e.classList.contains(`home`)?(m.forEach(e=>e.classList.remove(`pathfinder`)),e.classList.add(`pathfinder`),r()):e.classList.contains(`contact-Us`)&&(m.forEach(e=>e.classList.remove(`pathfinder`)),e.classList.add(`pathfinder`),u(),d(),f(),document.getElementById(`form-submit`).addEventListener(`click`,()=>{p()}))})}),document.getElementById(`home`)&&(document.getElementById(`home`).classList.add(`pathfinder`),r()),e(),t();