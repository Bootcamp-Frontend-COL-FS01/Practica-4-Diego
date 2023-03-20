import "bulma/css/bulma.css";
import "./index.css";
import Navigo from "navigo";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Feed from "./pages/feed";
import populateLocalStorage from "./utils/populate-local-storage";

// Execute script for painting the app with demo data
populateLocalStorage();

// Select the entry point. SPA architecture
const application: HTMLDivElement = document.querySelector("#app")!;

// Creating our router manager wih client-side routing
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
