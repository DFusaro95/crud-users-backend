const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
  const users = usersControllers.findAllUsers()
  res.status(200).json(users)
}

const getUserByID = (req, res) => {
  const id = req.params.id
  const data = usersControllers.findUserByID(id)
  if(data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'User Not Found'})
  }
}

const createNewUser = (req, res) => {
  const {first_name, last_name, email, password, birthday} = req.body
  if (first_name && last_name && email && password){
    const newUser = usersControllers.createNewUser({first_name, last_name, email, password, birthday})
    res.status(201).json(newUser)
  } else {
    res.status(400).json({
      message: 'Invalid Data',
      fields: {
        first_name: 'string*',
        last_name: 'string*',
        email: 'string*',
        password: 'string*',
        birthday: 'string = YYYY/MM/DD'
      },
    })
  }
}

module.exports = {
  getAllUsers,
  getUserByID,
  createNewUser
}