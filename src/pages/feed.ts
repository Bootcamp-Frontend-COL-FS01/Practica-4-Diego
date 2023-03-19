import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";
import NavBar from "../components/nav-bar";
import UserInfo from "../components/user-info";
import PostCard from "../components/post-card";

export default class Feed extends AbstractComponent {
  render(): string {
    const navBarComponent = new NavBar();
    const userInfoComponent = new UserInfo();
    const postCardComponent = new PostCard();

    return html`
      $${navBarComponent.render()}
      <div class="container p-5 mt-6">
        <div class="columns mt-5">
          <div class="column">$${userInfoComponent.render()}</div>
          <div class="column">
            $${postCardComponent.render()} $${postCardComponent.render()}
            $${postCardComponent.render()}
          </div>
        </div>
        <div>Hello again</div>
      </div>
    `;
  }
}
