import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";

import { AppState, Product } from "../types";
import { addProduct } from "../redux/actions";
import Button from "@mui/material/Button";

export default function ProductForm() {
  const dispatch = useDispatch<any>();

  const [state, setState] = React.useState<Product>({
    id: '',
    name: '',
    description: '',
    categories: [],
    variants: [],
    sizes:[],
    img: ''

  })

  const {name, description, categories, variants, sizes, img} = state
  
  console.log(state)

  
  const products = useSelector((state: AppState) => state.product.products);

  console.log(products);

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct: Product = {
      name,
      description,
      categories: [],
      variants: [],
      sizes: [],
      img,
      id: "",
    };
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = event.target
        if (name === 'variants'){
          const variants = value.split(',')
          setState({ ...state, variants: variants})
          console.log(variants)
          return
         }
         if (name === 'sizes'){
          const sizes = value.split(',')
          setState({ ...state, sizes: sizes})
          console.log(sizes)
          return
         }
        
        setState({ ...state, [name]: value })


  }
 

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleAddProduct}
        sx={{
          width: 500,
          maxWidth: "100%",
          mt: 2,
        }}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            onChange={handleChange}
            value={name}
            name = 'name'
          />


          <TextField
            id="outlined-helperText"
            label="Description"
            onChange={handleChange}
            value={description}
            name = 'description'
          />

          <TextField
            id="outlined-helperText"
            label="Categories"
            onChange={handleChange}
            value={categories}
            name = 'categories'
          />
          <TextField
            id="outlined-helperText"
            label="Variants"
            onChange={handleChange}
            value={variants}
            name = 'variants'
          />
          <TextField
            id="outlined-helperText"
            label="Sizes"
            onChange={handleChange}
            value={sizes}
            name ='sizes'
          />
          <TextField
            id="outlined-helperText"
            label="image"
            onChange={handleChange}
            value={img}
            name = 'img'
          />
        </div>
        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
        Add Product
      </Button>
      </Box>
      
    </>
  );
};
