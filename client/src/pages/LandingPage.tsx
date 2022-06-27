import React, { useState } from 'react'
import { Container } from '@material-ui/core'

import ProductList from '../components/Products/ProductList'

import useProduct from '../custom-hook/useProduct'
import Appbar from '../components/Appbar/Appbar'
import { Product } from '../types'
import Footer from './HomePage/Footer'

const LandingPage = () => {
  const [search, setSearch] = useState('')
  const productData = useProduct() 

  const filteredProduct = (productData).filter((product: Product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Container maxWidth="lg">
      <Appbar search={search} onChange={handleChange} />
      { filteredProduct.length === 0 && <p>No Products found</p>}
      <ProductList products={filteredProduct} />
      <Footer />
    </Container>
  )
}

export default LandingPage