import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";
import NavBar from "../components/nav-bar";
import UserInfo from "../components/user-info";

export default class Feed extends AbstractComponent {
  render(): string {
    const navBarComponent = new NavBar();
    const userInfoComponent = new UserInfo();

    return html`
      $${navBarComponent.render()}
      <div class="container p-5 mt-6">
        <div class="columns mt-5">
          <div class="column is-half">
            $${userInfoComponent.render()} $${userInfoComponent.render()}
            $${userInfoComponent.render()} $${userInfoComponent.render()}
          </div>
          <div class="column">$${userInfoComponent.render()}</div>
        </div>
        <div>Hello again</div>
      </div>
    `;
  }
}
