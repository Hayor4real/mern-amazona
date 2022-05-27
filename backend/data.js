import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ayorinde',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Micheal',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 200,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 300,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'nike-slim-pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 325,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 265,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '5',
      name: 'Cartoon Astronuat T-Shirts',
      slug: 'Cartoon Astronuat T-Shirts',
      category: 'Shirts',
      image: '/images/f1.jpg',
      price: 180,
      countInStock: 5,
      brand: 'adidas',
      rating: 4.5,
      numReviews: 5,
      description: 'high quality product',
    },
    {
      // _id: '6',
      name: 'Cartoon flower T-Shirts',
      slug: 'Cartoon flower T-Shirts',
      category: 'Shirts',
      image: '/images/f3.jpg',
      price: 195,
      countInStock: 25,
      brand: 'adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '7',
      name: 'Cartoon designer T-Shirts',
      slug: 'Cartoon designer T-Shirts',
      category: 'Shirts',
      image: '/images/f4.jpg',
      price: 75,
      countInStock: 26,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '8',
      name: 'Cartoon jacket T-Shirt',
      slug: 'Cartoon jacket T-Shirt',
      category: 'Shirts',
      image: '/images/f6.jpg',
      price: 205,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '9',
      name: 'Cartoon 3 quater',
      slug: 'Cartoon 3 quater',
      category: 'Trouser',
      image: '/images/f7.jpg',
      price: 250,
      countInStock: 10,
      brand: 'adidas',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '10',
      name: 'Cartoon slim fit T-Shirt',
      slug: 'Cartoon slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n1.jpg',
      price: 280,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '11',
      name: 'Cartoon  Ash slim fit T-Shirt',
      slug: 'Cartoon Ash slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n2.jpg',
      price: 280,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '12',
      name: 'Cartoon white slim fit T-Shirt',
      slug: 'Cartoon white slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n3.jpg',
      price: 285,
      countInStock: 20,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      // _id: '13',
      name: 'Cartoon slim fit T-Shirt',
      slug: 'Cartoon  slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n4.jpg',
      price: 287,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '14',
      name: 'Cartoon blue slim fit T-Shirt',
      slug: 'Cartoon blue slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n5.jpg',
      price: 289,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '15',
      name: 'Cartoon short trouser',
      slug: 'Cartoon short trouser',
      category: 'Trouser',
      image: '/images/n6.jpg',
      price: 260,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '16',
      name: 'Cartoon brawn slim fit T-Shirt',
      slug: 'Cartoon brawn slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n7.jpg',
      price: 190,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '17',
      name: 'Cartoon purple slim fit T-Shirt',
      slug: 'Cartoon purple slim fit T-Shirt',
      category: 'Shirts',
      image: '/images/n8.jpg',
      price: 275,
      countInStock: 25,
      brand: 'adidas',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Music player',
      slug: 'Music player',
      category: 'Music',
      image: '/images/Alexxa.jpg',
      price: 175,
      countInStock: 25,
      brand: 'sony',
      rating: 7.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
