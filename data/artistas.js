export const artistas = [
  {
    nombre: "Charly García",
    solista: true,
    edad: 72,
    instrumento: "Teclado",
    genero: "Rock",
    discos: [
      { titulo: "Yendo de la cama al living", anio: 1982, copiasVendidas: 150000 },
      { titulo: "Clics modernos", anio: 1983, copiasVendidas: 200000 },
      { titulo: "Piano bar", anio: 1984, copiasVendidas: 180000 }
    ],
    ultimoRecital: { entradasVendidas: 12000, costoEntradas: 1500 }
  },
  {
    nombre: "Fito Páez",
    solista: true,
    edad: 61,
    instrumento: "Teclado",
    genero: "Rock",
    discos: [
      { titulo: "El amor después del amor", anio: 1992, copiasVendidas: 750000 },
      { titulo: "Circo Beat", anio: 1994, copiasVendidas: 350000 }
    ],
    ultimoRecital: { entradasVendidas: 35000, costoEntradas: 2000 }
  },
  {
    nombre: "Divididos",
    solista: false,
    edad: 35, // Años de trayectoria de la banda
    instrumento: "Guitarra",
    genero: "Rock",
    discos: [
      { titulo: "Acariciando el áspero", anio: 1991, copiasVendidas: 90000 },
      { titulo: "La era de la boludez", anio: 1993, copiasVendidas: 260000 },
      { titulo: "Otroletravaladna", anio: 1995, copiasVendidas: 80000 },
      { titulo: "Narigón del siglo", anio: 2000, copiasVendidas: 120000 }
    ],
    ultimoRecital: { entradasVendidas: 45000, costoEntradas: 1800 }
  },
  {
    nombre: "Juana Molina",
    solista: true,
    edad: 61,
    instrumento: "Guitarra",
    genero: "Indie",
    discos: [
      { titulo: "Rara", anio: 1996, copiasVendidas: 20000 },
      { titulo: "Segundo", anio: 2000, copiasVendidas: 45000 }
    ],
    ultimoRecital: { entradasVendidas: 5000, costoEntradas: 1200 }
  },
  {
    nombre: "Eruca Sativa",
    solista: false,
    edad: 16,
    instrumento: "Bajo",
    genero: "Rock",
    discos: [
      { titulo: "La carne", anio: 2008, copiasVendidas: 15000 },
      { titulo: "ES", anio: 2010, copiasVendidas: 25000 },
      { titulo: "Blanco", anio: 2012, copiasVendidas: 30000 }
    ],
    ultimoRecital: { entradasVendidas: 8000, costoEntradas: 1400 }
  }
];
