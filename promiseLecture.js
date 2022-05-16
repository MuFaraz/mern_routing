const express = require('express');
const { resolve } = require('path');
const path = require('path')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
   
    const salaries = [100,200,300,400];
    const getSalary = ()=>{
        return new Promise((resolve,rejects)=>{
            resolve(salaries[1]);
        });
    }
    const data={
        "1":{
            fname:"Muhammad",
            lname:"Faraz",
            age:21,
            paid:0,
        },
        "2":{
            fname:"Muhammad",
            lname:"Faraz",
            age:23,
            paid:1
        }
    }
    const getMessageOfSalary = () =>{
        const date = new Date;
        return new Promise((resolve,reject)=>{
            if(date.getDate()>15){
                resolve(salaries[1])
            }
            else{
                reject('Tmhari salary pay hogayi...... shukriya');
            }
        })
        
    }
    const getData = ()=>{
        return new Promise((resolve,reject)=>{
            resolve(data[1])

        })
    }
    getSalary().then((sal)=>{
        // console.log(sal)
        return getData();
    }).then((resData)=>{
        // console.log(resData)
        getMessageOfSalary().then(res=>{
            console.log("asdas",resData.fname)
            console.log(`${resData.fname} ${resData.lname} you salary amount ${res}`)
        }).catch(err=>{
            console.log("asdas",resData.fname)
            console.log(`${resData.fname} ${resData.lname} ${err}`)
        })
    })
    // getMessageOfSalary()
})

app.listen(port,function(){
    
})