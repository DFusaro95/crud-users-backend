const express = require('express')
const userRouter = require('./users/users.router')
const port = 8400
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'App Working'})
})

app.use('/api/v1', userRouter)
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})