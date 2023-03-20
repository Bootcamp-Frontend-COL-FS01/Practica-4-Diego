import "bulma/css/bulma.css";
import "./index.css";
import Navigo from "navigo";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Feed from "./pages/feed";
import { javascript } from "webpack";

const application: HTMLDivElement = document.querySelector("#app")!;

const routerManager: Navigo = new Navigo("/", {
  hash: true,
});

routerManager.on(() => {
  const homePage = new Home();
  application.innerHTML = homePage.render();
});

routerManager.on("/login", () => {
  const loginPage = new Login();
  application.innerHTML = loginPage.render();
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

routerManager.resolve();
