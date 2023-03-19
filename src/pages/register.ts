import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";

export default class Register extends AbstractComponent {
  render() {
    const fields: string[] = ["Full Name", "Age"];

    return html`
      <div class="has-text-primary">Register to our amazing app</div>
      <div>${fields[0]}</div>
      <div>${fields[1]}</div>
    `;
  }
}
