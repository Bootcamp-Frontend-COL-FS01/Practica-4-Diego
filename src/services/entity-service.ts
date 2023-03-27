export default class EntityService {
  getAll<T>(name: string, object: string): T[] {
    return JSON.parse(localStorage.getItem(name)!)[object];
  }
}
