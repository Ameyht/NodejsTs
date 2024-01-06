import * as express from 'express';

const mongoose=require('mongoose');

const prodSchema= new mongoose.Schema({
    productName:{
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    productPrice:{
        type: 'number',
        required: true,
        trim : true,
    },
    productDetails :{
        type: 'string',
        required: true,
        trim : true,
    }
})

//created a new collection
const ProductData=new mongoose.Model("ProductData",prodSchema);

module.exports =ProductData;