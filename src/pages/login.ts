import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";

export default class Login extends AbstractComponent {
  render(): string {
    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-1">Log in</h1>
          <p>
            Log in to Socialize Up App to access your personalized profile,
            connect with your friends and family, and discover new communities.
          </p>
          <form class="mt-3">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="user@domain.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" />
              </div>
            </div>
            <button class="button is-primary">Log in</button>
          </form>
        </div>
      </div>
    `;
  }
}
