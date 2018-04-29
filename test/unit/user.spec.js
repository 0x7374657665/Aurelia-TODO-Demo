import CryptoJS from 'crypto-js'
import { User } from '../../src/entities/user'

describe('User entity', () => {
  it('should store usernames and hashes of passwords', () => {
    const user = new User('user', 'password')
    expect(user.name).toBe('user')
    expect(user.password).toEqual(`${CryptoJS.SHA1('password')}`)
  })
})
