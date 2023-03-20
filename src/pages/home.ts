import Component from "../shared/component";
import html from "html-template-tag";

export default class Home extends Component {
  render(): string {
    return html`
      <div class="container p-5 mt-3">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-1">Hello there!</h1>
          <h2 class="has-text-weight-medium is-size-5">
            Welcome to your favorite Social Networking Site :)
          </h2>
          <p class="mt-3">
            Connect with friends, family, and people from all over the world on
            our platform. Share your thoughts, ideas, and experiences with your
            community, and discover new perspectives from others. Stay
            up-to-date with what's happening in your world by following your
            favorite celebrities, news outlets, and organizations. You can also
            join groups and communities that share your interests and engage in
            lively discussions.
          </p>
          <div class="mt-3">
            <a href="/login" class="button is-primary" data-navigo>Log in</a>
            <a href="/register" class="button is-outlined" data-navigo
              >Sign up</a
            >
          </div>
        </div>
      </div>
    `;
  }
}
