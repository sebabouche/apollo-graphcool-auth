const mockLocalStorage = () => {
  let store = {}
  global.localStorage = {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => { store = {} },
  }
}

export default mockLocalStorage
