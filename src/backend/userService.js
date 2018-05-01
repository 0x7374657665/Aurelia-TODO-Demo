import { User } from "../entities/user";

const _users = [
  new User('user', 'pass')
]

const getUser = user => {
  let userToReturn = null
  const searchResult = _users.find(
    u => 
    u.name.toUpperCase() === user.name.toUpperCase()
    && u.password === user.password
  )
  if(searchResult) userToReturn = searchResult
  return userToReturn
  }



export class UserService {

  add(user) {
    if (user && !getUser(user)) {
      _users.push(user)
      return true
    }
    return false
  }

  getUsers() {
    return _users
  }

  authenticate(name,unhashedPassword) {
    const user = new User(name,unhashedPassword)
    return getUser(user)
  }

}
