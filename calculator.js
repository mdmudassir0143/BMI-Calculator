const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({exrended: true}))


app.get("/",function (req ,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result= num1+num2;
    res.send("The result of the calculation is " + result);
    console.log(req.body);
})


app.get("/bmiCalculator",function(req ,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    var num1= Number(req.body.weight);
    var num2= Number(req.body.height);
    var n= num1/num2;
    res.send("Your BMI is " + n);
    console.log(req.body);
})


app.listen(3000,function(){
    console.log("Server is listening...");
});