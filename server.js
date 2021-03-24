const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5252

const app = express()

app.use('/', express.static(path.join(__dirname, 'assets')))

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})

// END
