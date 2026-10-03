import { empleados } from '../data/empleados.js';

const empleadosPorArea = (listaEmpleados, area) => 
    listaEmpleados.filter(empleado => empleado.area === area);

console.table(empleadosPorArea(empleados, "Desarrollo"));