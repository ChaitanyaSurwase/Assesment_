    const mongoose = require ('mongoose')

    // mongoose.connect('mongodb://localhost:27017/olympic',{
        mongoose.connect('mongodb://localhost:27017/projectB',{

    }).then(()=>{
        console.log('Connection Succesful with Database')
    }).catch(()=>{
        console.log('Connection Failed')
    })

