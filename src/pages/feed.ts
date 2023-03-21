import Component from "../shared/component";
import html from "html-template-tag";
import NavBar from "../components/nav-bar";
import UserInfo from "../components/user-info";
import PostCard from "../components/post-card";
import StatsInfo from "../components/stats-info";
import isUnauthorizedMessage from "../components/is-unauthorized-message";
import postService from "../services/post-service";
import { Post } from "../shared/types";

export default class Feed extends Component {
  render(): string {
    const application: HTMLDivElement = document.querySelector("#app")!;
    const navBarComponent = new NavBar();
    const userInfoComponent = new UserInfo();
    const statsInfoComponent = new StatsInfo();
    //Since statsInfoComponent is a ReactiveComponent, but is not top level
    //The binding must be done in the Feed component
    statsInfoComponent.bindReactiveLogic(application);
    const isUnauthorizedMessageComponent = new isUnauthorizedMessage();
    const postData = new postService().getAll();

    //Check if there is no user in the session
    //Display a message to redirect back to home
    if (!localStorage.getItem("currentUser")) {
      return html` $${isUnauthorizedMessageComponent.render()} `;
    }

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
