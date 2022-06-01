// Action types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export type Categories = "Men" | "Women" | "Kids" | "Accessories";

export type Product = {
  id: string;
  name: string;
  description: string;
  categories: Categories[];
  variants: string[];
  sizes: string[];
  img: string;
};

export type ProductsState = {
  items: Product[] | any;
  isLoading: false;
  error: null;
};

export type AppState = {
  products: ProductsState;
};
