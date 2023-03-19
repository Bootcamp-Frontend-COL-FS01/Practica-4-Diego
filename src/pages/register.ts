import html from "html-template-tag";

export default class Register {
  render() {
    const fields: string[] = ["Full Name", "Age"];

    return html`
      <div>Register to our amazing app</div>
      <div>${fields[0]}</div>
      <div>${fields[1]}</div>
    `;
  }
}
