import { artistas } from "../data/artistas.js";

const artistasPorEdad = (listaArtistas, edad) => listaArtistas.filter(artista => artista.edad === edad);

console.table(artistasPorEdad(artistas, 72));