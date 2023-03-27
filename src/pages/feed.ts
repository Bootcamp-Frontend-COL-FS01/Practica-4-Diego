import Component from "../shared/component";
import html from "html-template-tag";
import NavBar from "../components/nav-bar";
import UserInfo from "../components/user-info";
import PostCard from "../components/post-card";
import StatsInfo from "../components/stats-info";
import isUnauthorizedMessage from "../components/is-unauthorized-message";
import postService from "../services/post-service";
import { Post } from "../shared/types";
import UserService from "../services/user-service";

export default class Feed extends Component {
  render(): string {
    const application: HTMLDivElement = document.querySelector("#app")!;
    const navBarComponent: NavBar = new NavBar();
    const userInfoComponent: UserInfo = new UserInfo();
    const statsInfoComponent: StatsInfo = new StatsInfo();
    //Since statsInfoComponent is a ReactiveComponent, but is not top level
    //The binding must be done in the Feed component
    statsInfoComponent.bindReactiveLogic(application);
    const postData: Post[] = new postService().getAll();

    //Check if there is no user in the session
    //Display a message to redirect back to home
    const isSessionActive = new UserService().doesCurrentExists();
    if (!isSessionActive) {
      const isUnauthorizedMessageComponent: isUnauthorizedMessage =
        new isUnauthorizedMessage();
      return html` $${isUnauthorizedMessageComponent.render()} `;
    }

    // If there is one, simply render the feed page
    return html`
      $${navBarComponent.render()}
      <div class="container p-5 mt-6">
        <div class="columns mt-5 is-variable is-6">
          <div class="column">$${userInfoComponent.render()}</div>
          <div class="column is-half">
            ${postData.map(
              (post: Post) => html`$${new PostCard(post).render()}`
            )}
          </div>
          <div class="column">$${statsInfoComponent.render()}</div>
        </div>
      </div>
    `;
  }
}
