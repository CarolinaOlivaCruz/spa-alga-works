export interface iProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const Products: iProduct[] = [
  {
    id: 1,
    name: "Cookie",
    price: 1.25,
    stock: 20,
  },
  {
    id: 2,
    name: "Chocolate",
    price: 2.99,
    stock: 10,
  },
  {
    id: 3,
    name: "Coca",
    price: 4.99,
    stock: 5,
  },
  {
    id: 4,
    name: "Leite",
    price: 3.98,
    stock: 15,
  }
];
