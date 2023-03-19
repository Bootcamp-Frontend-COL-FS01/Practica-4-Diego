import "bulma/css/bulma.css";
import Navigo from "navigo";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

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
});

routerManager.resolve();
