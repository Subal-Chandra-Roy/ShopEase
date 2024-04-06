import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Subal Roy",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      //_id: '1',
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //_id: '2',
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      countInStock: 10,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //_id: '3',
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "high quality pant",
    },
    {
      //_id: '4',
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 500,
      countInStock: 10,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      description: "high quality pant",
    },
  ],
};

export default data;
