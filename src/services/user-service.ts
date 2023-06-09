import { PrivateUser, User } from "../shared/types";
import EntityService from "./entity-service";

export default class UserService extends EntityService {
  getAll<User>(): User[] {
    return super.getAll("users", "userList");
  }

  getCurrentEmail(): string {
    return localStorage.getItem("currentUser")!;
  }

  doesCurrentExists(): boolean {
    return Boolean(this.getCurrentEmail());
  }

  getCurrent(): PrivateUser {
    //Get the data using the previous methods
    const currentUserEmail: string = this.getCurrentEmail();
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
