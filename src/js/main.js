import { lastModify, copyRight } from "./lastmodified.mjs";
import displayHeroPhotos from "./displayHeroPhotos.mjs";
import displayHomeCards from "./displayHomeCards.mjs";
import displaySportspage from "./displaySportPage.mjs";
import displaySoccerCountries from "./DisplaySportCards.mjs";

const allNav = document.querySelectorAll("a");
allNav.forEach((navA) => {
  navA.addEventListener("click", () => {
    if (navA.classList.contains("sports")) {
      allNav.forEach((nav) => nav.classList.remove("pathfinder"));
      navA.classList.add("pathfinder");
      displaySportspage();
      displaySoccerCountries();
    }
  });
});

displayHomeCards();
displayHeroPhotos();

lastModify();
copyRight();
