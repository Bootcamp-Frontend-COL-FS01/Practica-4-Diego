import { User } from "../shared/types";
const populateUsersData = (): void => {
  const userList: User[] = [
    {
      email: "jesselandreth@outlook.com",
      firstName: "Jesse",
      lastName: "Landreth",
      password: "5Aj74j#E",
    },
    {
      email: "dorabeaver@gmail.com",
      firstName: "Dora",
      lastName: " Beavers",
      password: "Ca@9664r",
    },
    {
      email: "johnaguilar@hotmail.com",
      firstName: "John",
      lastName: "Aguilar",
      password: "sP1z50@@",
    },
    {
      email: "willieramos@gmail.com",
      firstName: "Willie",
      lastName: "Ramos",
      password: "dN@5Q72#",
    },
  ];

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify({ userList }));
  }
};

export default populateUsersData;
