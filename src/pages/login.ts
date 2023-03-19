import AbstractComponent from "../shared/abstract-component";
import html from "html-template-tag";

export default class Login extends AbstractComponent {
  render() {
    return html` <div>Login to our beautiful app</div> `;
  }
}
