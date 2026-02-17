export const products = [
  {
    id: 1,
    name: 'Camperon Largo',
    price: 200000,
    category: 'Abrigo',
    featured: true,
    description: 'Campera larga oficial del club, perfecta para entrenamientos y uso diario.',
    image: '/imagenes/tienda/tiend5.jpg'
  },
  {
    id: 2,
    name: 'Buzo Ranglan Blanco',
    price: 80000,
    category: 'Buzos',
    featured: true,
    description: 'Buzo deportivo de alta calidad con mangas ranglan.',
    image: '/imagenes/tienda/tiend1.jpg'
  },
  {
    id: 3,
    name: 'Buzo Ranglan Negro',
    price: 70000,
    category: 'Buzos',
    featured: true,
    description: 'Buzo deportivo estilo ranglan en color negro.',
    image: '/imagenes/tienda/tiend6.jpg'
  },
  {
    id: 4,
    name: 'Conjunto Deportivo',
    price: 60000,
    category: 'Conjuntos',
    featured: false,
    description: 'Conjunto completo para entrenamientos y actividades deportivas.',
    image: '/imagenes/tienda/tiend2.jpg'
  },
  {
    id: 5,
    name: 'Short Ciclista',
    price: 20000,
    category: 'Shorts',
    featured: false,
    description: 'Short ciclista cómodo y funcional.',
    image: '/imagenes/tienda/tiend5.jpg'
  },
  {
    id: 6,
    name: 'Short Básquet',
    price: 35000,
    category: 'Shorts',
    featured: false,
    description: 'Short ideal para básquet y otras actividades deportivas.',
    image: '/imagenes/tienda/tiend4.jpg'
  },
  {
    id: 7,
    name: 'Camiseta Oficial',
    price: 80000,
    category: 'Remeras',
    featured: true,
    description: 'Remera oficial del club con los colores rojinegros.',
    image: '/imagenes/tienda/tiend7.jpg'
  },
  {
    id: 8,
    name: 'Pantalón de Entrenamiento',
    price: 55000,
    category: 'Pantalones',
    featured: false,
    description: 'Pantalón deportivo ideal para entrenamientos y uso diario.',
    image: '/imagenes/tienda/tiend3.jpg'
  },
  {
    id: 9,
    name: 'Medias Deportivas',
    price: 12000,
    category: 'Accesorios',
    featured: false,
    description: 'Medias deportivas del club, cómodas y duraderas.',
    image: '/imagenes/tienda/tiend1.jpg'
  },
  {
    id: 10,
    name: 'Gorra Oficial',
    price: 25000,
    category: 'Accesorios',
    featured: false,
    description: 'Gorra oficial del club con escudo bordado.',
    image: '/imagenes/tienda/tiend2.jpg'
  },
  {
    id: 11,
    name: 'Bolso Deportivo',
    price: 45000,
    category: 'Accesorios',
    featured: false,
    description: 'Bolso deportivo para entrenamientos y viajes.',
    image: '/imagenes/tienda/tiend4.jpg'
  },
  {
    id: 12,
    name: 'Campera Rompevientos',
    price: 95000,
    category: 'Abrigo',
    featured: true,
    description: 'Campera rompevientos liviana y resistente.',
    image: '/imagenes/tienda/tiend6.jpg'
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
