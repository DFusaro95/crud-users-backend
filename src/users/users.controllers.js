const usersDB = []
let id = 1

const findAllUsers = () => {
  return usersDB
}

const findUserByID = (id) => {
  const filteredUser = usersDB.find( element => element.id == id)
  return filteredUser
}

const createNewUser = (obj) => {
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday ? obj.birthday : "Birthday Unknown, we won't give you gifts"
  }
  usersDB.push(newUser)
  return newUser
}

module.exports = {
  findAllUsers,
  findUserByID,
  createNewUser
}