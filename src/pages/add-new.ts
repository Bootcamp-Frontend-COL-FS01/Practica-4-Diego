import ReactiveComponent from "../shared/reactive-component";
import html from "html-template-tag";
import { v4 as uuidv4 } from "uuid";
import isUnauthorizedMessage from "../components/is-unauthorized-message";
import UserService from "../services/user-service";

export default class AddNew extends ReactiveComponent {
  implementReactiveLogic(): string {
    return /*javascript*/ `
    window.handlePostSubmit = async (event) => {
      event.preventDefault();
      const rawData = new FormData(event.target);
      const cleanedData = Object.fromEntries(rawData.entries());
      const currentUserEmail = localStorage.getItem("currentUser");
      const data = JSON.parse(localStorage.getItem("users")).userList;
      const currentUser = data.filter(
        (user) => user.email === currentUserEmail
      )[0];
      const { email, firstName, lastName } = currentUser;
      const user = {email, firstName, lastName};
      const completeData = {...cleanedData, user};
      const storageData = JSON.parse(localStorage.getItem("posts")).postList;
      const postList = [completeData, ...storageData,];
      localStorage.setItem("posts", JSON.stringify({ postList }));
      window.location.replace("/#/feed");
    }
    `;
  }

  render(): string {
    //Check if there is no user in the session
    //Display a message to redirect back to home
    const isSessionActive = new UserService().doesCurrentExists();
    if (!isSessionActive) {
      const isUnauthorizedMessageComponent: isUnauthorizedMessage =
        new isUnauthorizedMessage();
      return html` $${isUnauthorizedMessageComponent.render()} `;
    }

    // If there is one, simply render the page for add new posts
    return html`
      <div class="container p-5 mt-3 custom-max-width">
        <div class="box">
          <h1 class="has-text-weight-semibold is-size-2">New post</h1>
          <p>
            Wanna share your thoughts with the world? Let's post it! Just log in
            and tap on "Create New Post". Give it a catchy title and write your
            heart out. Break up long paragraphs, add some emojis and photos, and
            voila - a perfect post!
          </p>
          <form class="mt-3" onsubmit="handlePostSubmit(event)">
            <div class="field">
              <label class="label">Id</label>
              <div class="control">
                <input
                  class="input"
                  name="id"
                  type="text"
                  value=${uuidv4()}
                  required
                  readonly
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input"
                  name="title"
                  type="text"
                  placeholder="I am a title"
                  required
                  minlength="10"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Content</label>
              <div class="control">
                <textarea
                  class="textarea"
                  name="text"
                  placeholder="Enter text"
                  rows="6"
                  required
                  minlength="200"
                ></textarea>
              </div>
            </div>
            <button class="button is-primary" type="submit">Submit post</button>
          </form>
        </div>
      </div>
    `;
  }
}
