import Component from "../shared/component";
import html from "html-template-tag";

export default class UserInfo extends Component {
  render(): string {
    return html`
      <div class="box">
        <h3 class="is-size-4 has-text-weight-semibold">Welcome again!</h3>
        <div class="content">
          <ul>
            <li>Joan B. Pratt</li>
            <li>user@domain.com</li>
          </ul>
        </div>
        <p>
          Until now, you have published 0 posts. Keep exploring our application
        </p>
        <button class="button is-danger is-outlined mt-3">Log out</button>
      </div>
    `;
  }
}
