import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../types";
import { addProduct, fetchAllProduct } from "../redux/actions";
import { addProducts, addProducttoCart } from "../redux/actions/cart";
import product from "../redux/reducers/product";

export default function Home() {
  const dispatch = useDispatch<any>();

  const products = useSelector((state: AppState) => state.product);

  const handleFetchProducts = () => {
    dispatch(fetchAllProduct());
  };
  
  const handleAddProduct  =()=>{
    const product = {
      id: '',
      name: 'Shorts',
      description: 'Confortable for summer',
      categories: [],
      variants: ['Red', 'Blue', 'Violet'],
      sizes: ['XS', 'M', 'L'],
      img :''

    }
   dispatch(addProduct(product))
  }

  // const handleAddtoCart  =()=>{
  //   const cart = {
  //     products: {
  //       id: '',
  //       name: 'Shirt',
  //       description: 'Comfortable for summer',
  //       categories: [],
  //       variants: ['Red', 'Blue', 'Violet'],
  //       sizes: ['XS', 'M', 'L'],
  //       img :''
  
  //     },
  //     userId:'sdsdfasdf',
  //     quantity: 5,
  //     price: 20
  //   }
  //  dispatch(addProducts(cart))
  //  console.log(cart)
  // }


  // console.log(products);
  return (
    <>
      <button onClick={handleFetchProducts}>Fetch product</button>
      <button onClick={handleAddProduct}>Add product</button>
      {/* <button onClick={handleAddtoCart}>Add to Cart</button> */}
    </>
  );
}
