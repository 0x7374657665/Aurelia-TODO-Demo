import { UserService } from "../../src/backend/userService";
import { User } from "../../src/entities/user";



describe('UserService', () => {

  let userSvc

  beforeEach(() => {
    userSvc = new UserService()
  })

  it('should add distinct new users', () => {
    const user = new User('testuser', 'pass')
    const differentUser = new User('testuser2', 'pass')
    const firstUserAgain = new User('tEstUser', 'pass')

    const users = userSvc.getUsers()
    const originalUsersCount = users.length

    expect(userSvc.add(user)).toBe(true)
    expect(userSvc.add(differentUser)).toBe(true)
    expect(userSvc.add(firstUserAgain)).toBe(false)

    expect(users).toContain(user)
    expect(users).toContain(differentUser)
    expect(users).not.toContain(firstUserAgain)

    expect(users.length).toBe(originalUsersCount + 2)
  })

  it('should authenticate supplied credentials', () => {
    const user = new User('user', 'pass')
    userSvc.add(user)

    expect(userSvc.authenticate('user', 'pass')).toEqual(user)
    expect(userSvc.authenticate('UsEr', 'pass')).toEqual(user)
    expect(userSvc.authenticate('no such user', 'pass')).toBeNull()
    expect(userSvc.authenticate('user', 'wrongpass')).toBeNull()
  })
})
