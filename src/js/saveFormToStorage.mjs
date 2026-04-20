export default async function saveFormToStorage(params) {
    const form = document.getElementById("reg-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            team: document.getElementById("preferred-team").value
        };
        localStorage.setItem("userData", JSON.stringify(formData));
    });
}