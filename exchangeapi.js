

// const express = require('express');
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import {resolve} from 'path';
// const path = require('path')
const app = express();

const port = 3000;

app.get('/:rate', (req, res) => {
    const getExchange = ()=>{
        return new Promise((resolve,rejects)=>{
            fetch('https://v6.exchangerate-api.com/v6/46a3bede4893e033f4364408/latest/USD')
                .then((response)=>{
                    resolve(response.json())
                })
                .catch(err=>{
                    rejects()
                })
            });
    }
    getExchange().then(res=>{
        
        console.log(req.params.rate * res.conversion_rates.PKR)
    });

    async function getExchangeByAwait(){
        const rates = await fetch('https://v6.exchangerate-api.com/v6/46a3bede4893e033f4364408/latest/USD')
        return rates.json()
    
    }

    getExchangeByAwait().then((res)=>{
        console.log(req.params.rate * res.conversion_rates.PKR)
    })
    // getExchange
})

app.listen(port,function(){
    
})