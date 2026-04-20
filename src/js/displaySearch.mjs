export default async function displaySearchResult(parameter) {
  const host = "free-api-live-football-data.p.rapidapi.com";
    const endPoint = parameter; //"/football-get-all-leagues";
  const myKey = "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686";
  const fileType = "application/json";

  //Pass all parameters to the getApiData().
  const data = await getApiData(host, endPoint, myKey, fileType);
}
