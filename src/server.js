'use strict'

const express = require ('express');
const app = express();
const cors = require ('cors')
app.use(cors())

const pageNotFound = require('./error-handlers/404')
const serverError = require('./error-handlers/500')
const logger = require('./middleware/logger');
const validator = require('./middleware/validator')

app.use(logger)


app.get('/person/:name', validator, handleName )
// app.get('/person', validator, handleName )
app.get ('/bad', badRequest)
app.use ('*' , pageNotFound)
app.use(serverError)





function badRequest(req,res, next){
    req.body = {
       test: 'test'
    }  
   next({message: 'test'})
   }


  function handleName(req,res){
res.status(200).json({
   name: `${req.name}` 
})
  }



function start(port) {
    app.listen(port, () => console.log('running on port: ', port))
    }
    
    module.exports = {
        app,
        start
      }