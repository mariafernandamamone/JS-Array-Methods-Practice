import { artistas } from "../data/artistas.js";

const artistasSolistas = (listaArtistas) => listaArtistas.filter(artista => artista.solista);

console.table(artistasSolistas(artistas));