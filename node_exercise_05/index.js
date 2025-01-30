import express from 'express'
import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config()

const app = express()
app.use(express.json)

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const getProducts = async() => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

app.get('/products/', async (req,res)=>{
    res.json({fruits: await getProducts(req.params)})
})

const getSingleProduct = async(p) => {
    let [data] = await pool.query('SELECT * FROM products WHERE product_code = ?',[p])
    return data
}



console.log('help')
console.log(await getProducts());
console.log(await getSingleProduct('hand1'));

