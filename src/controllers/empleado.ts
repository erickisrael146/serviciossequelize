import {Request, Response} from "express"
import {EmpleadoModel} from '../models/empleado'

const getEmpleado = async (req: Request, res: Response) =>{

    try {
        res.setHeader("Content-Type", "application/json");
        const employ = await EmpleadoModel.findAll();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        res.status(200).send(employ);

    }catch (e){
        console.log(e)
        res.sendStatus(500);
    }
}

const CrearEmpleado = async (req: Request, res: Response) =>{

    const {body} = req;
    res.setHeader("Content-Type", "application/json");
    await EmpleadoModel.create(body)

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.json({
        msg:'el producto ha sido agregado3'
    })


    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
}

const getEmpleadobyid = async (req:Request, res: Response) => {
    try {
        const {id} = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(id);
        const empleado = await EmpleadoModel.findByPk(id);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.status(200).send(empleado);
    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }

}
const updateEmpleado = async (req:Request, res: Response) => {
    try{
        const{id} = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(req.body);
        const {nombre, apellidoPat, apellidoMat, emaill} = req.body
        const viejoEmpleado = await EmpleadoModel.findByPk(id);

        if(viejoEmpleado){
           const empleadonuevo = await EmpleadoModel.update(req.body, { where :{
                id_empleado: id,
                }});
            console.log(viejoEmpleado);
           console.log(empleadonuevo);
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            res.status(200).send(empleadonuevo);
        } else {
          res.status(404).json({
              msg:"no existe ese empleado"
          })
        }


    }catch(e){
        console.log(e)
    return res.status(500).json({message: e})
    }
}


export {getEmpleado, CrearEmpleado, getEmpleadobyid, updateEmpleado}