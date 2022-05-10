const express = require('express');
const path = require('path')
const app = express()
const port = 3000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public/assets')))

app.get('/login',(req,res) => {
    res.render('login')
})
app.get('/carlist', (req, res) => {
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
app.get('/:bus_id', (req, res) => {
    const busHeading = "Bus List";
    const buslist = [
        {
            id:1,
            name:"w18",
        },
        {
            id:2,
            name:"f18",
        },
        {
            id:3,
            name:"mercedes"
        },
        {
            id:4,
            name:"murwat"
        },
        {
            id:5,
            name:"shiraz",
        }
    ]
   
    
    let obj = buslist.find(bus => bus.id == req.params.bus_id);
    if(!obj){
        obj = {
            id:1,
            name:"",
        }
    }
   
    res.render('buslist',{buslist:[obj],busHeading:busHeading});
//   res.send('hello world')
})

function test(x) {
    console.log(x);
}

function test1(func) {
    func("Hello World!");
}
app.listen(port,function(){
    test1(test)
})