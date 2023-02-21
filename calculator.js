const express=require('express')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/bmiCalculator.html')
})

app.post('/',(req,res)=>{
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)

    const result = parseFloat((weight/((height/100)**2)).toFixed(2))

    if (result < 18.5){
        var condition = "Underweight"
    }
    else if (18.5<result<24.9){
        var condition ='on Healthy Weight'
    }
    else if (25<result<29.9){
        var condition ='Overweight'
    }
    else if (result>30){
        var condition = 'Obese'
    }
    else{ console.log(result)}
    
    res.send(`The result is ${result} you are ${condition}`)

})