const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')

route(app)

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
//http logger
app.use(morgan('combined'))
//templat engine
app.engine('hbs', handlebars({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources/views'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
