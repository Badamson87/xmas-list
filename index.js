let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')


//middleware
server.use(express.static(__dirname + '/public')) //this makes it so your front-end works
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//register routes




//Catch all
server.get('*', (req, res, next) => {
  res.status(404).send('NO MATCHING ROUTE')
})


server.listen(port, () => {
  console.log('Server running on port:', port)
})
