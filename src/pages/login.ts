import IsLoggedMessage from "../components/is-logged-message";
import ReactiveComponent from "../shared/reactive-component";
import html from "html-template-tag";

export default class Login extends ReactiveComponent {
  implementReactiveLogic(): string {
    return /*javascript*/ `
    window.handleLoginSubmit = async (event) => {
      event.preventDefault();
      const rawData = new FormData(event.target);
      const cleanedData = Object.fromEntries(rawData.entries());
      const storageData = JSON.parse(localStorage.getItem("users"));
      if (storageData.userList.some((user)=>(user.email === cleanedData.email && 
        user.password === cleanedData.password? true: false))) {
          localStorage.setItem("currentUser", cleanedData.email);
          window.location.replace("/#/feed");
      }
    }
    `;
  }

  render(): string {
    //Check if there is a user in session
    if (localStorage.getItem("currentUser")) {
      const isLoggedMessageComponent: IsLoggedMessage = new IsLoggedMessage();
      return html` $${isLoggedMessageComponent.render()} `;
    }

    //If not, simply render the login form
    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-1">Log in</h1>
          <p>
            Log in to Socialize Up App to access your personalized profile,
            connect with your friends and family, and discover new communities.
          </p>
          <form class="mt-3" onsubmit="handleLoginSubmit(event)">
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
              <label class="label">Password</label>
              <div class="control">
                <input class="input" name="password" type="password" required />
              </div>
            </div>
            <button class="button is-primary" type="submit">Log in</button>
          </form>
        </div>
      </div>
    `;
  }
}
