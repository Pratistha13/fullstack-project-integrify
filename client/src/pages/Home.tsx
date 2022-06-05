import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../types";
import { fetchProducts } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch<any>();

  const products = useSelector((state: AppState) => state.products);

  const handleFetchProducts = () => {
    dispatch(fetchProducts());
  };
  console.log(products);
  return (
    <>
      <button onClick={handleFetchProducts}>Fetch product</button>
     
    </>
  );
}
