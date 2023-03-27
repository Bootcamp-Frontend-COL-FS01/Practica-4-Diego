import { Post } from "../shared/types";
import EntityService from "./entity-service";

export default class postService extends EntityService {
  getAll<Post>(): Post[] {
    return super.getAll("posts", "postList");
  }

  getByUserEmail(email: string): Post[] {
    const postData = this.getAll<Post>();
    const postFounded = postData.filter((post) => post.user.email === email);
    return postFounded;
  }
}
