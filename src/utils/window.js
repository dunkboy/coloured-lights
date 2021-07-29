const session = window.sessionStorage

export default {
  getItem (key) {
    try {
      return session.getItem(key)
    } catch (err) {
      return null
    }
  },
  setItem (key, val) {
    session.setItem(key, val)
  },
  getItemObj (key) {
    try {
      return JSON.parse(session.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItemObj (key, val) {
    session.setItem(key, JSON.stringify(val))
  },
  clear () {
    session.clear()
  },
  keys (index) {
    return session.key(index)
  },
  removeItem (key) {
    session.removeItem(key)
  }
}
