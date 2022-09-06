const app = require('express')()
const { port } = require('./config')

app.listen(port, () => {
  console.log('Listening at port: ' + port)
})
