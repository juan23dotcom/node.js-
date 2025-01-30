import mysql from 'mysql2/promise'; // /promise allows you to use async and await functions
import express from 'express'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME, 
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
const app = express()
app.use(express.json)


const getEmployeeData = async () =>{
    let [data] = await pool.query('SELECT * FROM  employees')
    return data
};
const getEmployeeById = async (x) =>{
    let [data] = await pool.query('SELECT * FROM  employees WHERE employee_id = ?',[x])
    return data
};
const insertEmployee= async(first_name, last_name, email, phone_number, department, salary) => {
    let [data] = await pool.query("INSERT INTO pick_n_steal.employees (first_name, last_name, email, phone_number, department, salary) VALUES (?, ?, ?, ?, ?, ?)",[ first_name, last_name, email, phone_number, department, salary])
    return getEmployeeData()
};
const deleteEmployee = async(x) => {
    let [data] = await pool.query("DELETE FROM pick_n_steal.employees WHERE employee_id = ?",[x])
    return getEmployeeData()
};
const updateEmployee = async(first_name, last_name, email, phone_number, department, salary, employee_id) => {
    let [data] = await pool.query("UPDATE pick_n_steal.employees SET  first_name = ? , last_name = ? , email = ? , phone_number = ? , department = ? , salary = ? WHERE employee_id = ?",[first_name, last_name, email, phone_number, department, salary, employee_id])
    return getEmployeeData()
};
app.listen(3000,()=>{
    console.log('http://localhost:3000');
});
console.log(await getEmployeeData());
console.log(await getEmployeeById(1))
//console.log(await insertEmployee('Frank','Muller','frank.muller@email.co.za','555-5555','Watch', '7500.00'));
console.log(await deleteEmployee(''));
console.log(await updateEmployee('Jono', 'Dear', 'john.doe@example.com', '555-1234', 'Engineering', '85000.00','1'));

console.log('help');





