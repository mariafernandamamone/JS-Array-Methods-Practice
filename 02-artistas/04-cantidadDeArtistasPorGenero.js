import { artistas } from "../data/artistas.js";

const cantidadDeArtistasPorGenero = (listaArtistas) => {
    const artistasGenero = listaArtistas.reduce((acc, artista) => {
    let genero = artista.genero;
    acc[genero] = (acc[genero] || 0) + 1;
    return acc;
  }, {});
  return artistasGenero;
};

console.log(cantidadDeArtistasPorGenero(artistas));