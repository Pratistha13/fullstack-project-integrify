import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProduct } from '../redux/actions/product'
import { AppState } from '../types'


const useProduct = () => {
    const dispatch = useDispatch<any>();
  const productData = useSelector(
    (state: AppState) => state.product.products
  )
  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])
  return productData
}

export default useProduct