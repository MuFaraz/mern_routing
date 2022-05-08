const express = require('express');
const path = require('path')
const app = express()

const port = 3000;
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    const busHeading = "Best Bus in the world";
    const buslist = [
        {
            name:"w18",
        },
        {
            name:"f18",
        },
        {
            name:"mercedes"
        },
        {
            name:"murwat"
        }
        ,
        {
            name:"shiraz"
        }
    ]
    res.render('buslist',{buslist:buslist,busHeading:busHeading});
  res.send('hello world')
})
app.listen(port)