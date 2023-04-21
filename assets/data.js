const productsData = [
  {
    id: 1,
    name: 'Funda cristal',
    bid: 450,
    category: 'cristal',
    cardImg: './assets/img/products/fundas/cristal.jpg',
  },
  {
    id: 2,
    name: 'Cristal con diseño',
    bid: 550,
    user: 'kirik8',
    category: 'cristal',
    cardImg: './assets/img/products/fundas/transparente_con_inicial.jpg',
  },
  {
    id: 3,
    name: 'Cristal reforzada',
    bid: 650,
    user: 'FD10S',
    category: 'cristal',
    cardImg: './assets/img/products/fundas/cristalrefor.jpg',
  },
  {
    id: 4,
    name: 'Funda rígida',
    bid: 490,
    category: 'Rígida',
    cardImg: './assets/img/products/fundas/rigida.jpg',
  },
  {
    id: 5,
    name: 'Rígida personalizada',
    bid: 790,
    category: 'Rígida',
    cardImg: './assets/img/products/fundas/personalizadas.jpg',
  },
  {
    id: 6,
    name: 'Rígida color',
    bid: 700,
    category: 'Rígida',
    cardImg: './assets/img/products/fundas/lisa.jpg',
  },
  {
    id: 7,
    name: 'Funda de seguridad',
    bid: 500,
    category: 'seguridad',
    cardImg: './assets/img/products/fundas/seguridad.jpg',
  },
  {
    id: 8,
    name: 'Seguridad cuero',
    bid: 630,
    category: 'seguridad',
    cardImg: './assets/img/products/fundas/cuero.jpg',
  },
  {
    id: 9,
    name: 'Sefuridad tela',
    bid: 580,
    category: 'seguridad',
    cardImg: './assets/img/products/fundas/seguridaddiseño.jpg',
  },
  {
    id: 10,
    name: 'Mundial diseño',
    bid: 780,
    category: 'mundial',
    cardImg: './assets/img/products/fundas/messi.png',
  },
  {
    id: 11,
    name: 'Mundial Camiseta',
    bid: 790,
    category: 'mundial',
    cardImg: './assets/img/products/fundas/mundial.jpg',
  },
  {
    id: 12,
    name: 'Mundial Copa',
    bid: 800,
    category: 'mundial',
    cardImg: './assets/img/products/fundas/mundial2.jpg',
  },
  {
    id: 13,
    name: 'Vidrio templado',
    bid: 400,
    category: 'templados',
    cardImg: './assets/img/products/fundas/transparent.jpg',
  },
  {
    id: 14,
    name: 'Templado 9D',
    bid: 500,
    category: 'templados',
    cardImg: './assets/img/products/fundas/templado9D.jpg',
  },
  {
    id: 15,
    name: 'Vidrio anti-espia',
    bid: 650,
    category: 'templados',
    cardImg: './assets/img/products/fundas/antiespia.jpg',
  },
];

// Ver Más
const splitProducts = size => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }
  return dividedProducts;
};

// dividir los productos  de 6 y paginacion
const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};


