export default async function displayContactUsPage() {
  const main = document.querySelector("main");
  main.innerHTML = `
        <h1>${document.querySelector("#contact-Us").textContent}</h1>
        <p>Register with us to get latest update on sport. Simple, enter your first name, last name and your email address. After that, select your preferred league of interest and hit the register me button. Boom, you start receiving updates at your convenience. It's as simple as that.</p>
        <div class="form-container">
            <form action="../thanks.html" method="GET" id="reg-form" class="reg-form">
                <h2>Registration Form</h2>
                <fieldset>
                    <legend>Customer's Information</legend>
                    <Label for="firstname" class="fname-label">
                        <span class="fname-span">Your First Name: <strong class="req">&#10033;</strong></span>
                        <input type="text" id="firstname" name="firstname" placeholder="Please Enter You Given Name" autocomplete="given-name" title="E.g; Dr." required>
                    </label>
                    <label for="lastname">
                        <span class="lname-span">Your Last Name: <strong class="req">&#10033;</strong></span>
                        <input type="text" id="lastname" name="lastname" class="last-name" placeholder="Please Enter You Family Name" autocomplete="family-name" title="No title" required>
                    </label>
                    <label for="email" class="email=label">
                        <span class="email-span">Your Email: <strong class="req">&#10033;</strong></span>
                        <input type="email" class="email" id="email" name="email" title="email" autocomplete="email" placeholder="example@email.com" required>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Teams Option</legend>
                    <label for="preferred-team">
                        <span>Select Your Prefered League:<strong class="req">&#10033;</strong></span>
                        <select id="preferred-team" name="preferred-team" class="preferred-team">
                            <option>Select Your Team</option>
                        </select>
                    </label>
                </fieldset>
                <label for="submitted">
                    <button type="submit" name="submit" class="submit">Register Me</button>
                </label>
            </form>
        </div>
    `;
}
