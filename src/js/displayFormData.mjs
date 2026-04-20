

export default async function displayFormData(data) {
    const main = document.getElementById("thanks");
    const heading = document.createElement("h1");
    heading.textContent = "Registration Completed";
    const intro = document.createElement("p")
    intro.innerText = "The following are information you provided during your registration.";
    main.appendChild(heading);
    main.appendChild(intro);
    if (data) {
        await data.forEach((value, key) => {
            const p = document.createElement("p");
            p.setAttribute("class", "item-p");
            p.innerHTML = `<span>${key}</span> : <span>${value}</span>`;
            main.appendChild(p);
        })
    } else {
        main.innerHTML = `<p><strong> No data recieved! </strong> </P`;
    }
}