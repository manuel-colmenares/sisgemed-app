import Router from 'express';
import conn from '../database/dbconection.js';

const router = Router();

router.get('/', (req, res) => {
    const usuarios = conn.query(`SELECT * FROM usuarios`)
    res.json(usuarios);
})


export default router;