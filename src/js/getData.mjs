export default async function getApiData(host, endPoint, myKey, fileType) {
  const url = `https://${host}${endPoint}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": myKey,
      "x-rapidapi-host": host,
      "Content-Type": fileType,
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const text = await response.text();
      console.log(text);
    }
  } catch (error) {
    console.error(error);
  }
}
