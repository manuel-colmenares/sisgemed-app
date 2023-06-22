import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.Routes.js'

import './config/config.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes

app.use('/api', indexRouter);

// Handling Errors
app.use((err, req, res, next) => {
    //console.log(err);
    err.statusCode = err.statusCode || 500;
    err.statusMessage || "Internal Server Error";
    res.status(err.statusCode.json({ message: err.message, }));
});

export default app;