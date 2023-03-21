import "bulma/css/bulma.css";
import "./index.css";
import Navigo from "navigo";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Feed from "./pages/feed";
import AddNew from "./pages/add-new";
import populateUsersData from "./utils/populate-users-data";
import populatePostsData from "./utils/populate-posts-data";

// Executing the script for painting the app with demo data (users and posts)
populateUsersData();
populatePostsData();

// Select the entry point. A SPA architecture is used
const application: HTMLDivElement = document.querySelector("#app")!;

// Creating our router manager wih client-side routing
const routerManager: Navigo = new Navigo("/", {
  hash: true,
});

//Handling the distinct routes with a Page
routerManager.on(() => {
  const homePage = new Home();
  application.innerHTML = homePage.render();
});

routerManager.on("/login", () => {
  const loginPage = new Login();
  application.innerHTML = loginPage.render();
  loginPage.bindReactiveLogic(application);
});

routerManager.on("/register", () => {
  const registerPage = new Register();
  application.innerHTML = registerPage.render();
  registerPage.bindReactiveLogic(application);
});

routerManager.on("/feed", () => {
  const feedPage = new Feed();
  application.innerHTML = feedPage.render();
});

routerManager.on("/new", () => {
  const addNewPage = new AddNew();
  application.innerHTML = addNewPage.render();
  addNewPage.bindReactiveLogic(application);
});

//Resolving the router is needed in order to apply the routing
routerManager.resolve();
