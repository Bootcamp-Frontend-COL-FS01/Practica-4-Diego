import ReactiveComponent from "../shared/reactive-component";
import html from "html-template-tag";

export default class Register extends ReactiveComponent {
  implementReactiveLogic(): string {
    return /*javascript*/ `
    const handleSubmit = async (event) => {
      event.preventDefault();
      const rawData = new FormData(event.target);
      const cleanedData = Object.fromEntries(rawData.entries());
      const {email, password} = cleanedData;
      console.log(cleanedData);
    };`;
  }

  render(): string {
    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-1">Sign up</h1>
          <p>
            Join to Socialize Up App today and start connecting with your global
            community. Create a free account and set up your personalized
            profile in just a few easy steps. Do no wait any longer!
          </p>
          <form class="mt-3" onsubmit="handleSubmit(event)">
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
            <button class="button is-primary" type="submit">
              <a href="/login" data-navigo class="unstyled-link"> Sign up </a>
            </button>
          </form>
        </div>
      </div>
    `;
  }
}
