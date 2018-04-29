import CryptoJS from 'crypto-js'

export class User {

  constructor(name = '', unhashedpw = '') {
    this.name = name
    this.password = `${CryptoJS.SHA1(unhashedpw)}`
  }
}
