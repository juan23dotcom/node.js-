import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/employees', (req, res)=>{
    res.json({
        message:'this is the GET employees path'
    })
})
app.post('/employees', (req, res)=>{
    res.json({
        message:'this is the employees post '
    })
})
app.put('/employees', (req, res)=>{
    res.json({
        message:'this is the employees put path'
    })
})
app.delete('/employees', (req, res)=>{
    res.json({
        message:'this is the employees delete path'
    })
})
app.get('/managers', (req, res)=>{
    res.json({
        message:'this is the GET managers path'
    })
})

app.post('/managers', (req, res)=>{
    res.json({
        message:'this is the managers post path'
    })
})
app.put('/managers', (req, res)=>{
    res.json({
        message:'this is the managers put path'
    })
})
app.delete('/managers', (req, res)=>{
    res.json({
        message:'this is the managers delete path'
    })
})


app.listen(3000,()=>{
    console.log('http://localhost:' + PORT);
})