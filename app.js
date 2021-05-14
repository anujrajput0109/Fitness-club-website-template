const http=require("http");
const fs=require("fs");
const express=require("express");
const path=require('path');




const port=80;
const app=express();
app.use('/static', express.static('static'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})
app.get('/contact',(req,res)=>{
    let object={'title':"Fitness Club Contact Page"};
    res.status(200).render('contact.pug',object);
})
app.get('/jion',(req,res)=>{
    let object={'title':"Jion Our Fitness Club"};
    res.status(200).render('jion.pug',object);
})
//post request for contact form details
app.get('/submit',function(req,res){
    let myData= `User name is ${req.query.name}. His phone number is ${req.query.phone}. email is ${req.query.email}. address is ${req.query.address}. His quetion is ${req.query.message}\n\n`;
    // console.log(myData);
    fs.appendFileSync("contact.txt", myData);
    let object={'title':"Fitness Club Contact Page"};
    res.status(200).render('contact.pug',object);
});





app.listen(port,()=>{
    console.log(`application is running on port ${port}`)
})
