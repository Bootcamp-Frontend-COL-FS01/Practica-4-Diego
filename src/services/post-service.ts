import { Post } from "../shared/types";

export default class postService {
  getAll(): Post[] {
    return JSON.parse(localStorage.getItem("posts")!).postList;
  }

  getByUserEmail(email: string): Post[] {
    const postData = this.getAll();
    const postFounded = postData.filter((post) => post.user.email === email);
    return postFounded;
  }
}
