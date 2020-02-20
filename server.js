var app = require('express')()
var path = require('path')
var serveStatic = require('serve-static')

app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server starter ' + port)