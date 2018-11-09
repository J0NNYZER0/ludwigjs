
class Utilities {

  static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  static setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

}

export { Utilities }
