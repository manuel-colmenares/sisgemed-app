import Router from 'express';
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

// Obtener lista de  usuarios
router.get('/usuarios', getUsuarios);
// Obtener Usuario
router.get('/usuarios/:id', getUsuario);
// Crear nuevo usuario
router.post('/usuarios/', createUsuario);
// Actualizar usuario.
router.patch('/usuarios/:id', updateUsuario);
// Eleiminar usuario.
router.delete('/usuarios/:id', deleteUsuario);



export default router;