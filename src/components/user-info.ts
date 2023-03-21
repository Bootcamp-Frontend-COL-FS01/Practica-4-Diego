import UserService from "../services/user-service";
import Component from "../shared/component";
import html from "html-template-tag";

export default class UserInfo extends Component {
  render(): string {
    const user = new UserService().getCurrentUser();
    const { email, firstName, lastName } = user;

    return html`
      <div class="box">
        <h3 class="is-size-4 has-text-weight-semibold">Welcome again!</h3>
        <div class="content">
          <ul>
            <li>${firstName} ${lastName}</li>
            <li>${email}</li>
          </ul>
        </div>
      </div>
    `;
  }
}
