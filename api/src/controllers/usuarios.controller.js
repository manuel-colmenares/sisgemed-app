import { pool } from "../database/dbconection.js";


// Obtener lista de suarios.
export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Sonthing goes wrong", error: error });
    }
};

// Obtener usuario.
export const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE idUsuario = ?', [id,]);

        if (rows.length <= 0) {
            return res.status(400).json({ message: "Usuario not found", });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Sonthing goes wrong", error: error });
    }
};

// Crear nuevo usuario.
export const createUsuario = async (req, res) => {
    try {
        const { apellido, nombre, usuario, password } = req.body;
        const [rows] = await pool.query('INSERT INTO usuarios( apellido, nombre, usuario, password ) VALUES (?,?,?,?)', [apellido, nombre, usuario, password]);
        res.status(201).json({ idUsuario: rows.insertId, apellido, nombre, usuario, password });
    } catch (error) {
        return res.status(500).json({ message: "No se pudo crear un nuevo usuario", error: error });
    }
};

// Actualizar usuario.
export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { apellido, nombre, usuario, password } = req.body;

        const [result] = await pool.query(
            'UPDATE usuarios SET apellido = IFNULL(?,apellido), nombre = IFNULL(?,nombre), usuario = IFNULL(?,usuario), password = IFNULL(?,password) WHERE idUsuario = ?',
            [apellido, nombre, usuario, password, id]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Usuario no encontrado" })

        const [rows] = await pool.query("SELECT * FROM usuarios WHERE idUsuario = ?", [id]);
        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Algo salio mal al actualizar el usuario" });
    }
};

// Eleiminar usuario.
export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM usuarios WHERE idUsuario = ?', [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        };

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Algo salio mal. No se pudo eliminar el usuario." });
    }
};
