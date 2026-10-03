import { artistas } from "../data/artistas.js";

const artistaConMasCopias = (listaArtistas) => {
  return listaArtistas.reduce((acc, artista) => {
    // 1. Sumamos el total de copias del artista actual
    const copiasArtista = artista.discos.reduce((total, disco) => total + disco.copiasVendidas, 0);

    // 2. Sumamos el total de copias del artista que viene ganando en acc
    const copiasAcc = acc.discos.reduce((total, disco) => total + disco.copiasVendidas, 0);

    // 3. Comparamos los dos totales igual que en el ejercicio 07
    return copiasArtista > copiasAcc ? artista : acc;
  });
};

console.log(artistaConMasCopias(artistas));