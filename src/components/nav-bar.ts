import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";

export default class NavBar extends AbstractComponent {
  render(): string {
    return html`
      <nav
        class="has-shadow navbar is-fixed-top is-flex is-justify-content-space-between is-align-items-center py-3 px-5"
        role="navigation"
      >
        <h6 class="has-text-weight-semibold is-size-6">Socialize Up App</h6>
        <a href="#feed" class="button is-primary">Add new</a>
      </nav>
    `;
  }
}
