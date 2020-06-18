export default class Cache {
  constructor(initData = {}) {
    this.store = initData;
  }
  getData(keyword) {
    return this.store[keyword.toLocaleLowerCase()]
  }
  setData(keyword, data) {
    this.store[keyword.toLocaleLowerCase()] = data
  }
}
