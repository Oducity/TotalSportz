const myAppiKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";

import { lastModify, copyRight } from "./lastmodified.mjs";
import getHeroData from "./displayHeroPhotos.mjs";
const api = "";
const repo = "TotalSportz";
const path = "src/public/json";
const jsonfile = "home.json";

getHeroData(repo, path, jsonfile);

lastModify();
copyRight();