// grabe express to our code base
const express = require('express')
// create an app with express
const app = express()

// make express be aware of the styles.css file
app.use(express.static('public'))

// set up handlebars
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

// make a home route
app.get('/simpleRoute', (request, response) => {
  response.send('<h1>hello world</h1>')
})

// make a root route
app.get('/simpleHtmlRoute', (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/stylesheets/style.css">
    </head>
    <body>
      <h1>Hello world</h1>
      <img src="/images/testImage.png">
    </body>
  </html>
  `)
})

// simple html page as a file
app.get('/htmlFileRoute', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

// simple html page linked to another one
app.get('/linkPage', (request, response) => {
  response.sendFile(`${__dirname}/views/linkPage.html`)
})

// dynamic html gape as a file
app.get('/dynamicHtml', (request, response) => {
  // data for the hbs engine
  const data = {
    name: 'john',
    age: 28,
    show: false,
    fruits: ['orange', 'mango', 'kiwi'],
    address: {
      street: 'main',
      number: 57,
    },
  }
  // render a dynamic template
  response.render('index', data)
})

// start listening to request
app.listen(5001, () => {
  console.log('server started')
})
