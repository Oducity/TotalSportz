export default async function setApiAddress(host, endPoint, myKey, fileType) {
  //const address = `${siteAddress}${endPoint}`;
  //const parameter = endPoint;
  //const APIKey = myKey;

  /*****************************************************************/

    const url = `https://${host}${endPoint}`;//'footapi7.p.rapidapi.com/api/match/14015387/shotmap';
  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': myKey,//'d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686',
          'x-rapidapi-host': host,//'footapi7.p.rapidapi.com',
          'Content-Type': fileType//'application/json'
      }
    };
    return (url, options);
  try {
      const response = await fetch(url, options);
      if (response.ok) {
          const result = await response.json();
          console.log(result);
      } else {
          console.log(`Response not ok. ${response.status}`)
      }
  } catch (error) {
      console.error(error);
  }

  /***********************************************************************************/
/*
  const url =
    "https://therundown-therundown-v1.p.rapidapi.com/v2/events/39ae57a35f4a3088ddcfbd46dc66ba46/stats";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686",
            "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
            "Content-Type": "application/json",
        },
    };
    
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        
    } catch (error) {
        console.error(error);
    }

  /***********************************************************************************/


  //const url =
  //  "https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso";
  //const options = {
  //  method: "GET",
  //  headers: {
  //    "x-rapidapi-key": "d5e371912emshe979d50bdbd81f0p15c7c5jsn0e0e5bdbf686",
  //    "x-rapidapi-host": "odds.p.rapidapi.com",
  //    "Content-Type": "application/json",
  //  },
  //};
  //
  //try {
  //  const response = await fetch(url, options);
  //  //const result = await response.text();
  //  if (response.ok) {
  //      const data = await response.json();
  //      console.log(data);
  //  }
  //
  //} catch (error) {
  //  console.error(error);
    //}
    
}
