import { Post } from "../shared/types";

export default class postService {
  getAll(): Post[] {
    return JSON.parse(localStorage.getItem("posts")!).postList;
  }
}
