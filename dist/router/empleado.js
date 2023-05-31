"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const empleado_1 = require("../controllers/empleado");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/emp', (req, res) => {
    res.send({ message: 'sin miedo al exito 4' });
});
router.get('/', empleado_1.getEmpleado);
router.post('/', empleado_1.CrearEmpleado);
router.put('/:id', empleado_1.updateEmpleado);
router.get('/:id', empleado_1.getEmpleadobyid);
