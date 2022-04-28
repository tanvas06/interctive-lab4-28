const express = require(`express`)
const path = require(`path`)

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd0feabbf97d0464598fb7b56df7cb1fc',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, `../index.html`))
    rollbar.info('html file served successfully.')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`listening on port ${port}`))