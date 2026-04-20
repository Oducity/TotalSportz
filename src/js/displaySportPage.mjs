export default async function displaySportspage() {
  //Emptied the title element and set the text node of thesame.
  const title = document.querySelector("title");
  title.innerText = "";
  title.innerText = "TotalSportz || sports page";
  //Emptied the main element and pass into it the following html h1 and section elements to be used by other functions in the program.
  const main = document.querySelector("main");
  main.innerHTML = "";


  //This code is for search bar ---- To be added to the project later.
    //<label for="search">
    //<input type="text" id="search" name"search" placeholder="type STANDING to get league standing">
    //<button id="search-btn" class"search-btn" type="button">Display Result</button>
    //</label>

  main.innerHTML = `
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
    `;
}
