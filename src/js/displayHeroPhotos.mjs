export default async function displayHeroPhotos(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Response not ok: ${response.status}`);
    } else {
        const data = await response.json();
        console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}
