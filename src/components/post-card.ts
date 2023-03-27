import { Post } from "../shared/types";
import Component from "../shared/component";
import html from "html-template-tag";

export default class PostCard extends Component {
  public post: Post;

  constructor(post: Post) {
    super();
    this.post = post;
  }

  render(): string {
    const { user, title, text } = this.post;
    const { firstName, lastName, email } = user;

    return html`
      <div class="card mb-5">
        <div class="card-image">
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/seed/${title
                .split(" ")
                .join("")}/1200/800"
              alt="Post image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://api.dicebear.com/5.x/bottts/svg?seed=${firstName}"
                  alt="Avatar"
                />
              </figure>
            </div>
            <div class="media-content">
              <p>${firstName} ${lastName}</p>
              <p class="is-size-6 has-text-grey">${email}</p>
            </div>
          </div>
          <h6 class="has-text-weight-semibold is-size-6">${title}</h6>
          <div class="content">
            <p class="mt-3">${text}</p>
          </div>
        </div>
      </div>
    `;
  }
}
