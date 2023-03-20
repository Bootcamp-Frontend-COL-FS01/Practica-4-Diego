import { User } from "../shared/types";

const populateLocalStorage = (): void => {
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
    {
      email: "joanedgar@gmail.com",
      firstName: "Joan",
      lastName: "Edgar",
      password: "@rvxZ950",
    },
    {
      email: "jamesmccoy@hotmail.com",
      firstName: "James",
      lastName: "McCoy",
      password: "paP579*1",
    },
    {
      email: "thomaslefebre@jala.com",
      firstName: "Thomas",
      lastName: "Lefebre",
      password: "%52l6Y2c",
    },
    {
      email: "winfrednelson@jalasoft.com",
      firstName: "Winfred",
      lastName: "Nelson",
      password: "46$8E4s5",
    },
  ];
  localStorage.setItem("users", JSON.stringify({ userList }));
  const data: User[] = JSON.parse(localStorage.getItem("users")!);
  console.log(data);
};

export default populateLocalStorage;
