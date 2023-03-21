// The Component class should be used mostly when the goal is render markup only
// Dumb component https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
export default abstract class Component {
  abstract render(): string;
}
