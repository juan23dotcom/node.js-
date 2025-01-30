import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE
})

const getProducts = async() => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}
const getUsers = async () =>{
    let [data] = await pool.query('SELECT * FROM  users')
    return data
}

const deleteProducts = async (d)=> {
    let [data] = await pool.query('DELETE FROM products WHERE product_code = ?', [d])
    return data
}

const insertProduct = async(product_code, product_name, product_price, product_quantity) => {
    let [data] = await pool.query("INSERT INTO shopleft_database.products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)",[product_code, product_name, product_price, product_quantity])
    return data
}

const updateProduct = async(product_code, product_name, product_price, product_quantity,id) => {
    let [data] = await pool.query("UPDATE products SET product_code = ? , product_name = ?, product_price = ?, product_quantity = ? WHERE product_code = ?",[product_code, product_name, product_price, product_quantity,id])
    return data
}

insertProduct()
deleteProducts('baro1')
insertProduct('chic1','Chicken','99.00','1');
updateProduct('jung1','Jungle Bar','28.00','2','baro1')
console.log( await getProducts());
console.log( await getUsers());
