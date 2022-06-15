const express = require('express')

const app = express()
const PORT = parseInt(process.argv[3]) || 8080
app.use(express.static('public'))

app.listen(PORT, (err) => {
  if (!err)
    console.log(
      `servidor escuchando en express ${PORT} - PID WORKER ${process.pid}`
    )
})
