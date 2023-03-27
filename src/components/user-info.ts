import UserService from "../services/user-service";
import Component from "../shared/component";
import html from "html-template-tag";
import { PrivateUser } from "../shared/types";

export default class UserInfo extends Component {
  render(): string {
    const currentUser: PrivateUser = new UserService().getCurrent();
    const { email, firstName, lastName } = currentUser;

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
