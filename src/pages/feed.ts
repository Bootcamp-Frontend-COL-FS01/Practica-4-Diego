import Component from "../shared/component";
import html from "html-template-tag";
import NavBar from "../components/nav-bar";
import UserInfo from "../components/user-info";
import PostCard from "../components/post-card";
import StatsInfo from "../components/stats-info";

export default class Feed extends Component {
  render(): string {
    const navBarComponent = new NavBar();
    const userInfoComponent = new UserInfo();
    const postCardComponent = new PostCard();
    const statsInfoComponent = new StatsInfo();

    return html`
      $${navBarComponent.render()}
      <div class="container p-5 mt-6">
        <div class="columns mt-5 is-variable is-6">
          <div class="column">$${userInfoComponent.render()}</div>
          <div class="column is-half">
            $${postCardComponent.render()} $${postCardComponent.render()}
            $${postCardComponent.render()}
          </div>
          <div class="column">$${statsInfoComponent.render()}</div>
        </div>
        <div>Hello again</div>
      </div>
    `;
  }
}
