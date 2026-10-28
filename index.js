import express from 'express';
import env from 'dotenv';
import connectDatabase from './database/connectDatabase.js';
import bookRouter from './router/bookRouter.js';
env.config();

const app = express();
const PORT = 2026;

app.use(express.json());

app.use('/api/books',bookRouter);

connectDatabase();

app.listen(PORT, ()=>{
    console.log('server is running at post : ' + PORT)
})