export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  thumbnail: string;
  brand: string;
  stock: number;
}

export interface CheckoutProduct {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
  quantity: number;
}
