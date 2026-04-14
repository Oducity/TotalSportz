export default async function displaySportspage() {
    //Emptied the title element and set the text node of thesame.
    const title = document.querySelector("title");
    title.innerText = "";
    title.innerText = "TotalSportz || sports page";
    //Emptied the main element and pass into it the following html h1 and section elements to be used by other functions in the program.
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.innerHTML = `
    <h1 class="sporpage-heading" id="sportpage-heading">Sports</h1>
    <label for="search">
        <input type="text" id="search" name"search">
        <button id="search-btn" class"search-btn" type="button">Display Result</button>
    </label>
    <section id="football-countries" class="football-countries"></sction>
    <section id="team-players" class="team-players"></sction>
    <section id="all-leagues" class="all-leagues"></sction>
    <section id="league-teams" class="league-teams"></sction>
    <section id="league-events" class="league-events"></sction>
    <dialog>
        <div id="dialog-box" class="dialog-box"></div>
        <button id="close-dialog" class="close-dialog" type="button"></button>
    <dialog>
    `;
    
};



















