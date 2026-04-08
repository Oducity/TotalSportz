//export default async function displayHeroPhotos(path) {
//  try {
//    const response = await fetch(path);
//    if (!response.ok) {
//        throw new Error(`Response not ok: ${response.status}`);
//    } else {
//        const data = await response.json();
//        console.log(data);
//    }
//  } catch (error) {
//    console.error(error);
//  }
//}

export default async function getHeroData(repo, path, jsonfile) {
    
    try {
        const testurl =
          "https://corsproxy.io/?key=a22051f7&url=https://github.com/Oducity/TotalSportz/tree/main/src/public/json/home.json";
        //const targetUrl = `https://oducity.github.io/${repo}/${path}/${jsonfile}`;
        //const proxyUrl = `https://corsproxy.io/?key=a22051f7&url=${targetUrl}`;
        //const options = {
        //  method: "GET",
        //  headers: {
        //    "x-rapidapi-key": "a22051f7",
        //    "x-rapidapi-host": "https://corsproxy.io",
        //    "Content-Type": "application/json",
        //  },
        //};
        const response = await fetch(testurl);
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
