import Component from "./component";

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
