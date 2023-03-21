import Component from "../shared/component";
import html from "html-template-tag";

export default class NavBar extends Component {
  render(): string {
    return html`
      <nav
        class="has-shadow navbar is-fixed-top is-flex is-justify-content-space-between is-align-items-center py-3 px-5"
        role="navigation"
      >
        <h6 class="has-text-weight-semibold is-size-5">Socialize Up App</h6>
        <a href="/new" class="button is-primary" data-navigo>Add new</a>
      </nav>
    `;
  }
}
