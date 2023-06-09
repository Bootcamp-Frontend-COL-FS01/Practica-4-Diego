import { Post } from "../shared/types";
import ReactiveComponent from "../shared/reactive-component";
import html from "html-template-tag";
import postService from "../services/post-service";
import UserService from "../services/user-service";

export default class StatsInfo extends ReactiveComponent {
  implementReactiveLogic(): string {
    return /*javascript*/ `
    window.handleLogout = async () => {
      localStorage.removeItem("currentUser");
      window.location.replace("/#");
    }
    `;
  }

  render(): string {
    const currentUserEmail: string = new UserService().getCurrentEmail();
    const postsByUser: Post[] = new postService().getByUserEmail(
      currentUserEmail
    );

    return html`
      <div class="box">
        <h3 class="is-size-4 has-text-weight-semibold">Stats info</h3>
        <p class="mt-3">
          Until now, you have published ${postsByUser.length.toString()} posts.
          Keep exploring our application
        </p>
        <button
          class="button is-danger is-outlined mt-3"
          onclick="handleLogout()"
        >
          Log out
        </button>
      </div>
    `;
  }
}
