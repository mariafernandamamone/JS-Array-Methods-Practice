import { artistas } from "../data/artistas.js";

const artistaConMasEntradasVendidas = (listaArtistas) => {
  return listaArtistas.reduce((acc, artista) => {
    return artista.ultimoRecital.entradasVendidas > acc.ultimoRecital.entradasVendidas
      ? artista
      : acc;
  });
};

console.log(artistaConMasEntradasVendidas(artistas));