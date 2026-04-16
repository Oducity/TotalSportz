import { lastModify, copyRight } from "./lastmodified.mjs";
import displayHeroPhotos from "./displayHeroPhotos.mjs";
import {
  displayHomeCards,
  displaySoccerCountries,
} from "./displayHomeCards.mjs";
import displaySportspage from "./displaySportPage.mjs";
import displayTeamSqad from "./displayTeamSqad.mjs";
import displayAllLeagues from "./displayAllLeagues.mjs";
import displayTeamSqad from "./displayTeamSqad.mjs";


const allNav = document.querySelectorAll("a");
allNav.forEach((navA) => {
  navA.addEventListener("click", () => {
    if (navA.classList.contains("sports")) {
      allNav.forEach((nav) => nav.classList.remove("pathfinder"));
      navA.classList.add("pathfinder");
      displaySportspage();
      displaySoccerCountries();
      displayAllLeagues();
      displayTeamSqad();
    } else if (navA.classList.contains("home")) {
      allNav.forEach((nav) => nav.classList.remove("pathfinder"));
      navA.classList.add("pathfinder");
      displayHeroPhotos();
      displayHomeCards();
    }
  });
});

if (document.getElementById("home")) {
  document.getElementById("home").classList.add("pathfinder");
  displayHeroPhotos();
  displayHomeCards();
}

lastModify();
copyRight();
