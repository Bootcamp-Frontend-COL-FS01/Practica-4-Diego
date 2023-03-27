import Component from "../shared/component";
import html from "html-template-tag";

export default class isUnauthorizedMessage extends Component {
  render(): string {
    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-3">Oops!</h1>
          <p class="mt-2">
            We are sorry, but it looks like you don't have permission to access
            this feature. Please log in or create an account to continue using
            our app and unlock all of its great features!
          </p>
          <a href="/" class="button is-primary mt-3" data-navigo>Go to home</a>
        </div>
      </div>
    `;
  }
}
