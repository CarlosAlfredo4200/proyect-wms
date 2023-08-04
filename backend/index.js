import express from "express";
import dotenv from 'dotenv'
import connectionDB from "./config/db.js";
 
import usersRoutes from './routes/userRoutes.js'
const app = express();

app.use(express.json());//Reemplaza bodyParser

dotenv.config();//buscar variables
 
connectionDB();

 


// Routing
app.use('/api/users', usersRoutes)

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


