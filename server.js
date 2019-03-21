import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello everyone')
})

app.listen(9000, () => console.log('Listening http://localhost' + 9000))
