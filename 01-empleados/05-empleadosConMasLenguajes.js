import { empleados } from '../data/empleados.js';

const empleadosConMasLenguajes = (listaEmpleados, cantidad) => 
    listaEmpleados.filter(empleado => empleado.lenguajes.length > cantidad);

console.table(empleadosConMasLenguajes(empleados, 2));