 
const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
app.use(express.urlencoded({extended: false}))

// app.use(express.json())
const arr = [shopRoutes, adminRoutes]
app.use(express.json())
 app.use('/admin', adminRoutes)
 app.use(shopRoutes)

// arr.forEach(el => app.use(el))
 
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found 404</h1>')
})
 
// app.use('/user',(req, res, next) => {
//     console.log('in the another middle ware');
//     res.send(`<p>users</p> <a href="/">Home</a>`)
  
// })




app.listen(3000)