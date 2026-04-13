
export default function displayHeroPhotos() {
  document.querySelector("title").textContent = "TotalSportz || Home - page";
  const main = document.querySelector("#main");
  main.innerHTML = `
  <div class="hero-container"><img id="hero-image"></div>
  <h1>${document.querySelector("#home").textContent}</h1>
  <p class="intro">TotalSportz is a leading company that provide real update of live events of sports around the world including past events.
  We delight ourselves in providing free quality services to you and prioritize your satisfaction. <span> <strong>Note: This is a student project</strong></span></p>
  <div class="events" id="events">
  <section class="fixtures" id="fixtures"></section>
  </div>
  `;
}

