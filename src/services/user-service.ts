import { PrivateUser, User } from "../shared/types";

export default class UserService {
  getCurrentUser(): PrivateUser {
    const currentUserEmail: string = localStorage.getItem("currentUser")!;
    const data: User[] = JSON.parse(localStorage.getItem("users")!).userList;
    const currentUser: User = data.filter(
      (user) => user.email === currentUserEmail
    )[0];
    const { email, firstName, lastName } = currentUser;
    const currentUserPrivate: PrivateUser = { email, firstName, lastName };
    return currentUserPrivate;
  }
}
