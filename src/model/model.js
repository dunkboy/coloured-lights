const light = class Light {
  constructor (id, ldUrl, nickname) {
    this.id = id
    this.ldUrl = ldUrl
    this.nickname = nickname
  }
}

const userinfo = class Userinfo {
  constructor (id, loginName, nickname, avatar, superAdminIs, lastLoginTime, funcPerms) {
    this.id = id
    this.loginName = loginName
    this.nickname = nickname
    this.avatar = avatar
    this.superAdminIs = superAdminIs
    this.lastLoginTime = lastLoginTime
    this.funcPerms = funcPerms
  }
}

export default {
  model: {
    light: light,
    userinfo: userinfo
  }
}
