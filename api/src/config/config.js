import dotenv from 'dotenv';
dotenv.config()

export const PORT = process.env.PORT || 3000;
export const host = process.env.HOST || 'localhost';
export const port = process.env.PORTDB || 3306
export const user = process.env.USER || 'root';
export const password = process.env.PASSWORD || '';
export const db = process.env.DATABASE;