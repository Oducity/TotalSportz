const myAppiKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
const footballDataKey = "e8da021158624d73b370068de1e7959b";
const para = "football-players-search?search=m";

//import setApiAddress from "./getHomeApiAddress.mjs";
//import displayHomeCards from "./displayHomeCards.mjs";
import getApiData from "./getData.mjs";
import { lastModify, copyRight } from "./lastmodified.mjs";
import displayHeroPhotos from "./displayHeroPhotos.mjs";
import displayHomeCards from "./displayHomeCards.mjs";

displayHomeCards();
//const apiAdd = new setApiAddress();
//getApiData(footballDataKey);

displayHeroPhotos();

//getApiData(para, myAppiKey);
//displayEvent();
lastModify();
copyRight();