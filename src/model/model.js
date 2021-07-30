const light = class Light {
  constructor (id, ldUrl, nickname) {
    this.id = id
    this.ldUrl = ldUrl
    this.nickname = nickname
  }
}
export default {
  model: {
    light: light
  }
}
