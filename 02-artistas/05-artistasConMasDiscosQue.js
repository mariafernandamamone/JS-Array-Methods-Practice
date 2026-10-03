import { artistas } from "../data/artistas.js";

const artistasConMasDiscosQue = (cantidadDiscos, listaArtistas) =>
  listaArtistas
    .filter((artista) => artista.discos.length > cantidadDiscos)
    .sort((a, b) => b.discos.length - a.discos.length);

console.table(artistasConMasDiscosQue(2, artistas));