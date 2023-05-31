import {Router, Request, Response} from 'express';
 import {CrearEmpleado, getEmpleado, getEmpleadobyid, updateEmpleado} from "../controllers/empleado";

const router = Router();

router.get('/emp', (req: Request, res)=>{
    res.send({message:'sin miedo al exito 4'})
});

 router.get('/', getEmpleado)
 router.post('/', CrearEmpleado);
 router.put('/:id', updateEmpleado);
 router.get('/:id', getEmpleadobyid);

export {router}