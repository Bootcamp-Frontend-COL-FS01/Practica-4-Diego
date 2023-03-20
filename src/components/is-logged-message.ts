import Component from "../shared/component";
import html from "html-template-tag";
import { User } from "../shared/types";

export default class IsLoggedMessage extends Component {
  render(): string {
    const currentUserEmail: string = localStorage.getItem("currentUser")!;
    const data: User[] = JSON.parse(localStorage.getItem("users")!).userList;
    const currentUser: User = data.filter(
      (user) => user.email === currentUserEmail
    )[0];
    const { email, firstName, lastName } = currentUser;

    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-3">
            Hey ${firstName} ${lastName}!
          </h1>
          <p class="mt-2">
            Welcome back, we're glad to see you again! Stay connected with your
            friends and loved ones, share your thoughts and experiences, and
            explore new communities. We hope you enjoy your time on our
            platform.
          </p>
          <a href="/feed" class="button is-primary mt-3" data-navigo
            >Go to feed</a
          >
        </div>
      </div>
    `;
  }
}
