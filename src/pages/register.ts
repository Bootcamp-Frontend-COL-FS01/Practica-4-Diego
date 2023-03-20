import ReactiveComponent from "../shared/reactive-component";
import IsLoggedMessage from "../components/is-logged-message";
import html from "html-template-tag";

export default class Register extends ReactiveComponent {
  implementReactiveLogic(): string {
    return /*javascript*/ `
    window.handleRegisterSubmit = async (event) => {
      event.preventDefault();
      const rawData = new FormData(event.target);
      const cleanedData = Object.fromEntries(rawData.entries());
      const storageData = JSON.parse(localStorage.getItem("users"));
      if (!storageData.userList.some((user)=>(user.email === cleanedData.email? true: false))){
        const userList = [...storageData.userList, cleanedData];
        console.log(userList);
        localStorage.setItem("users", JSON.stringify({ userList }));
        window.location.replace("/#/login");
      }
    };`;
  }

  render(): string {
    //Check if there is a user in session
    if (localStorage.getItem("currentUser")) {
      const isLoggedMessageComponent = new IsLoggedMessage();
      return html` $${isLoggedMessageComponent.render()} `;
    }

    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-1">Sign up</h1>
          <p>
            Join to Socialize Up App today and start connecting with your global
            community. Create a free account and set up your personalized
            profile in just a few easy steps. Do no wait any longer!
          </p>
          <form class="mt-3" onsubmit="handleRegisterSubmit(event)">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  name="email"
                  type="email"
                  placeholder="user@domain.com"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input"
                  name="firstName"
                  type="text"
                  placeholder="Barbara"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  class="input"
                  name="lastName"
                  type="text"
                  placeholder="Williams"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" name="password" type="password" required />
              </div>
            </div>
            <button class="button is-primary" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    `;
  }
}
