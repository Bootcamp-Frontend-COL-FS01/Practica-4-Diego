import Component from "./component";

// ReactiveComponent is an upgrade of the default component
// It can handle events of the DOM with implementReactiveLogic
// Smart component https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
// The usage in this project is mostly in Pages
// For getting it to work, an additional binding is required with the app
export default abstract class ReactiveComponent extends Component {
  abstract render(): string;
  abstract implementReactiveLogic(): string;
  bindReactiveLogic(app: HTMLDivElement): void {
    const script = document.createElement("script");
    script.innerHTML = this.implementReactiveLogic();
    script.type = "module";
    app.appendChild(script);
  }
}
