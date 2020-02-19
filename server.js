const exp=require("express");
const app=exp();
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');

app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:false}));
app.get("/", (req,res)=>{
res.render("home",{
title:`Home`
  })
});

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{

    console.log("start server now...");
})

