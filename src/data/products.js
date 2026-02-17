export const products = [
  {
    id: 1,
    name: 'Camperon Largo',
    price: 200000,
    category: 'Abrigo',
    featured: true,
    description: 'Campera larga oficial del club, perfecta para entrenamientos y uso diario.'
  },
  {
    id: 2,
    name: 'Buzo Ranglan Blanco',
    price: 80000,
    category: 'Buzos',
    featured: true,
    description: 'Buzo deportivo de alta calidad con mangas ranglan.'
  },
  {
    id: 3,
    name: 'Buzo Ranglan Negro',
    price: 70000,
    category: 'Buzos',
    featured: true,
    description: 'Buzo deportivo estilo ranglan en color negro.'
  },
  {
    id: 4,
    name: 'Conjunto Deportivo',
    price: 60000,
    category: 'Conjuntos',
    featured: false,
    description: 'Conjunto completo para entrenamientos y actividades deportivas.'
  },
  {
    id: 5,
    name: 'Short Ciclista',
    price: 20000,
    category: 'Shorts',
    featured: false,
    description: 'Short ciclista cómodo y funcional.'
  },
  {
    id: 6,
    name: 'Short Básquet',
    price: 35000,
    category: 'Shorts',
    featured: false,
    description: 'Short ideal para básquet y otras actividades deportivas.'
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
