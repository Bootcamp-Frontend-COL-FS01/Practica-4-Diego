import { PrivateUser, User } from "../shared/types";

export default class UserService {
  getAll(): User[] {
    return JSON.parse(localStorage.getItem("users")!).userList;
  }

  getCurrentUserEmail(): string {
    return localStorage.getItem("currentUser")!;
  }

  getCurrentUser(): PrivateUser {
    //Get the data using the previous methods
    const currentUserEmail: string = this.getCurrentUserEmail();
    const data: User[] = this.getAll();

    //Finding current user
    const currentUser: User = data.filter(
      (user) => user.email === currentUserEmail
    )[0];

    //Hiding the password. Is not needed
    const { email, firstName, lastName } = currentUser;
    const currentUserPrivate: PrivateUser = { email, firstName, lastName };
    return currentUserPrivate;
  }
}
