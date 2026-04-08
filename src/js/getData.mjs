const cultout = "football-players-search?search=m";//this is the para

export default async function getApiData(para, api) {
  const url = `https://free-api-live-football-data.p.rapidapi.com/${para}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": api,
      "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const text = await response.text();
      console.log(text);
    }
    const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
    console.error(error);
  }
}
