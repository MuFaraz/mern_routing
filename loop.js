

// const express = require('express');
import { debug } from 'console';
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import {resolve} from 'path';
// const path = require('path')
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const arr = [1,2,3,4,57];
    arr.forEach(element => {
        console.log(element);
    });
})

app.listen(port,function(){
    
})