import pool from 'mysql2';
import { db, host, port, password, user } from '../config/config.js';

const conn = pool.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: db
})

conn.connect((err) => {
    if (err) throw err;
    console.log('Database is connected successfully !');
})

export default conn;