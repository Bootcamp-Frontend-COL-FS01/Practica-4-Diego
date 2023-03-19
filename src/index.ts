import "./index.css";
import Navigo from "navigo";

const application: HTMLDivElement = document.querySelector("#app")!;
const routerManager = new Navigo("/", {
  hash: true,
});

routerManager.on(() => {
  application.innerHTML = "<div> I am a div! </div>";
});

routerManager.on("/login", () => {
  application.innerHTML = "<div> I am a second div! </div>";
});

routerManager.resolve();
