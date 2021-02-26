const express = require('express')

const app = express()

app.get('/',  (req, res) => {
    res.send('Hello World2')
  })
   
  app.listen(3333, () => {
      console.log('🚀🚀Server started at http://localhost:3333')
  })