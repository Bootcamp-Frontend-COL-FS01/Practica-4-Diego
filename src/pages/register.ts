import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";

export default class Register extends AbstractComponent {
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
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Barbara" />
              </div>
            </div>
            <div class="field">
              <label class="label">Full Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Williams" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" />
              </div>
            </div>
            <div class="field">
              <label class="label">Confirm password</label>
              <div class="control">
                <input class="input" type="password" />
              </div>
            </div>
            <button class="button is-primary">Sign up</button>
          </form>
        </div>
      </div>
    `;
  }
}
