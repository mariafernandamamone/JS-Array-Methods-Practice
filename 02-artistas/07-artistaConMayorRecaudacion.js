import { artistas } from "../data/artistas.js";

const artistaConMayorRecaudacion = (listaArtistas) => {
  return listaArtistas.reduce((acc, artista) => {
    return artista.ultimoRecital.entradasVendidas *
      artista.ultimoRecital.costoEntradas >
      acc.ultimoRecital.entradasVendidas * acc.ultimoRecital.costoEntradas
      ? artista
      : acc;
  });
};

console.log(artistaConMayorRecaudacion(artistas));
