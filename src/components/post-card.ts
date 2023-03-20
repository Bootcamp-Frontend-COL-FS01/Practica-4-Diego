import Component from "../shared/component";
import html from "html-template-tag";

export default class PostCard extends Component {
  render(): string {
    return html`
      <div class="card mb-5">
        <div class="card-image">
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/seed/Felix/1200/800"
              alt="Post image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://api.dicebear.com/5.x/bottts/svg?seed=Camilo"
                  alt="Avatar"
                />
              </figure>
            </div>
            <div class="media-content">
              <p>Jhon Doe</p>
              <p>user@gmail.com</p>
            </div>
          </div>
          <p>
            Hello everyone! I just got back from a trip to the mountains and I
            have to say, it was one of the most breathtaking experiences of my
            life. The fresh air, the stunning views, and the feeling of being so
            close to nature were absolutely incredible. I highly recommend
            taking a break from the city and exploring the great outdoors
            whenever you get the chance. Share your favorite outdoor adventure
            in the comments below!
          </p>
        </div>
      </div>
    `;
  }
}
