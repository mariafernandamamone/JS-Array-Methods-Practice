import { estudiantes } from "../data/estudiantes.js";

const familiarPreferido = (listaEstudiantes) => {
  const conteoFamiliares = listaEstudiantes.reduce((acc, estudiante) => {
    estudiante.familiares.forEach((animal) => {
      acc[animal] = acc[animal] ? acc[animal] + 1 : 1;
    });
    return acc;
  }, {});
  const listaAnimales = Object.keys(conteoFamiliares);
  const animalPreferido = listaAnimales.reduce((maxAnimal, animalActual) => {
    return conteoFamiliares[animalActual] > conteoFamiliares[maxAnimal] ? animalActual : maxAnimal;
  }, listaAnimales[0]);
  return animalPreferido;
};

console.log(familiarPreferido(estudiantes));
