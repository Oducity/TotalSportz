

export default async function displayFormData() {
    const savedData = localStorage.getItem("userData");
    const main = document.getElementById("main");
    main.innerHTML = "";
    const heading = document.createElement("h1");
    heading.textContent = "Registration Completed";
    const intro = document.createElement("p")
    intro.innerText = "The following are information you provided during your registration.";
    main.appendChild(heading);
    main.appendChild(intro);
    if (savedData) {
        const data = JSON.parse(savedData);
        console.log(data);
        const firstName = document.createElement("p");
        firstName.setAttribute("class", "first-name");
        firstName.innerHTML = `<span>First Name</span>: <span>${data.firstName}`;
        const lastName = document.createElement("p");
        lastName.setAttribute("class", "last-name");
        lastName.innerHTML = `<span>Last Name</span>: </span>${data.lastName}</span>`;
        const emailP = document.createElement("P");
        emailP.setAttribute("class", "email");
        emailP.innerHTML = `<span>Email</span>: <span>${data.email}</span>`;
        const teamp = document.createElement("P");
        teamp.setAttribute("class", "team");
        teamp.innerHTML = `<span>Preferred Team</span>: <span>${data.team}`;
        main.appendChild(firstName);
        main.appendChild(lastName);
        main.appendChild(emailP);
        main.appendChild(teamp);
    } else {
        main.innerHTML = `<p><strong> No data recieved! </strong> </P`;
    }
}