import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/products', (req, res)=>{
    res.json({
        message:'this is the GET product path'
    })
})
app.post('/products', (req, res)=>{
    res.json({
        message:'this is the products post '
    })
})
app.put('/products', (req, res)=>{
    res.json({
        message:'this is the products put path'
    })
})
app.delete('/products', (req, res)=>{
    res.json({
        message:'this is the products delete path'
    })
})
app.get('/users', (req, res)=>{
    res.json({
        message:'this is the GET users path'
    })
})

app.post('/users', (req, res)=>{
    res.json({
        message:'this is the users post path'
    })
})
app.put('/users', (req, res)=>{
    res.json({
        message:'this is the users put path'
    })
})
app.delete('/users', (req, res)=>{
    res.json({
        message:'this is the users delete path'
    })
})


app.listen(3000,()=>{
    console.log('http://localhost:' + PORT);
})
