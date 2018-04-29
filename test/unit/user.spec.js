import CryptoJS from 'crypto-js'
import { User}  from '../../src/entities/user'

define('User entity', () => {
  it('should store hashes of passwords', () => {
    const user = new User()
    user.password = 'password'
    expect(user.password).toBe(CryptoJS.SHA1('password'))
  })
})
