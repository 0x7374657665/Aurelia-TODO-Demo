import CryptoJS from 'crypto-js'

export class User {
  constructor() {
    this.name = ''
    this.password = ''
  }

  set password(unhashedpw) {
    this.password = CryptoJS.SHA1(unhashedpw)
  }
}
