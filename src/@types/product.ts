export type Product = {
  title: string;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ProductRating;
};

type ProductRating = {
  count: number;
  rate: number;
};
