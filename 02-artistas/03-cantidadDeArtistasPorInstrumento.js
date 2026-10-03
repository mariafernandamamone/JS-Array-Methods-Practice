import { artistas } from "../data/artistas.js";

const cantidadDeArtistasPorInstrumento = (listaArtistas) => {
    const artistasInstrumento = listaArtistas.reduce((acc, artista) => {
    let instrumento = artista.instrumento;
    acc[instrumento] = (acc[instrumento] || 0) + 1;
    return acc;
  }, {});
  return artistasInstrumento;
};

console.log(cantidadDeArtistasPorInstrumento(artistas));