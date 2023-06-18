import createError from 'http-errors';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './routes/index.Routes.js'


const app = express();

app.use(express.json());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

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