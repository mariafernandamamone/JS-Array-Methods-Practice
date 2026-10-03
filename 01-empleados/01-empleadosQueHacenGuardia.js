import { empleados } from '../data/empleados.js';

const empleadosQueHacenGuardia = (listaEmpleados) => 
    listaEmpleados.filter(empleado => empleado.haceGuardia);

console.table(empleadosQueHacenGuardia(empleados));