// localstorage wrap
class Catch {

  setCatch(key: string,value: any) {
    let jsonData = JSON.stringify(value)
    localStorage.setItem(key,jsonData)
  }

  getCatch(key: string) {
    let jsonData = localStorage.getItem(key)
    return jsonData?JSON.parse(jsonData): undefined
  }

  deleteCatch(key: string) {
    localStorage.removeItem(key)
  }

}

export default new Catch()