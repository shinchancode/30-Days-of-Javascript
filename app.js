const exp=require("express");
const fs = require('fs');
const appl=exp();
const bodyParser=require('body-parser')
const port=process.env.PORT || 8000;

appl.use(bodyParser.urlencoded({extended:false}))

appl.use(exp.static('static'))
appl.set('view engine', 'pug')

appl.get('/',(req,res)=>
{
    res.sendFile('index.html',{root:__dirname})
})

// Start the server
appl.listen(port,()=>
{
    console.log(`Successfully completed with port ${port}`);
});