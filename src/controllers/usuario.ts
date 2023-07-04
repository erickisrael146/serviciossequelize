import {Request, Response} from "express"
import {UsuarioModel} from '../models/usuario'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const getUsuario = async (req: Request, res: Response) =>{

    try {
        res.setHeader("Content-Type", "application/json");
        const employ = await UsuarioModel.findAll();
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

const CrearUsuario = async (req: Request, res: Response) =>{

    const {body} = req;
    const {name, password} = req.body;
    res.setHeader("Content-Type", "application/json");

    const hashedPasword = await bycrypt.hash(password, 10)

    try {
         const usuario = await UsuarioModel.findOne({where: {name: name }});

         if (usuario){
             return res.status(400).json({
                 msg: 'ya existe el usuairo'
             })
         }
        console.log(hashedPasword)
        await UsuarioModel.create({
            name: name,
            password: hashedPasword
        })

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.json({
            msg: 'el usuario ha sido agregado3'
        })
    } catch (error){
        res.status(400).json({
            msg: 'ha ocurrido un error'
        })
    }


    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
}

const Login = async (req: Request, res: Response) =>{

    const {body} = req;
    const {name, password} = req.body;
    res.setHeader("Content-Type", "application/json");


    try {
        const usuario = await UsuarioModel.findOne({where: {name: name }});

        if (!usuario){
            return res.status(400).json({
                msg: 'no existe un usuario con ese nombre'
            })
        }
        console.log(usuario)
         const passwordValid = await bycrypt.compare(password, usuario.dataValues.password)
        if(!passwordValid){
            return res.status(400).json({
                msg: 'password incorrecto'
            })
        }

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        const token = jwt.sign({
            name: name
        }, 'xxxx')
        res.json({
            msg: token
        })
    } catch (error){
        res.status(400).json({
            msg: 'ha ocurrido un error'
        })
    }


    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
}


const getUsuariobyid = async (req:Request, res: Response) => {
    try {
        const {id} = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(id);
        const empleado = await UsuarioModel.findByPk(id);
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
const updateUsuario = async (req:Request, res: Response) => {
    try{
        const{id} = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(req.body);
        const {nombre, apellidoPat, apellidoMat, emaill} = req.body
        const viejoEmpleado = await UsuarioModel.findByPk(id);

        if(viejoEmpleado){
            const empleadonuevo = await UsuarioModel.update(req.body, { where :{
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


export {getUsuario, CrearUsuario, getUsuariobyid, updateUsuario, Login}