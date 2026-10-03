import { artistas } from "../data/artistas.js";

const artistasConDiscoEnAnio = (listaArtistas, anio) => {
    const discosArtista = listaArtistas.filter(artista => artista.discos 
        .some(disco => disco.anio === anio));
    return discosArtista;
};

console.log(artistasConDiscoEnAnio(artistas, 2008));