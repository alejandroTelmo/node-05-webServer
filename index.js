require('dotenv').config();
const express = require('express')
const app = express()
const port=process.env.PORT ;
app.use(express.static(__dirname+'/public'))
const user={
    id:123,
    nombre:'ADT'
}
app.get('/', function (req, res) {
  res.send(JSON.stringify(user))
})
app.get('/user', function (req, res) {
    res.send('Mi nombre es'+JSON.stringify(user))
  })
  app.post('/nuevo', function (req, res) {
    res.send('nuevoUsuario'+JSON.stringify(user))
  }) 
app.listen(port,()=>{
  console.log(`Server started -Port ${port}`) 

})