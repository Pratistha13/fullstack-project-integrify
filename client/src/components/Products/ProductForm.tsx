import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";

import { AppState, Product } from "../../types";
import { addProduct } from "../../redux/actions";
import Button from "@mui/material/Button";
import CheckBoxGroup from "../CheckBoxGroup";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const dispatch = useDispatch<any>();
  const checkboxCategories = ["Men", "Kids", "Women", "Accessories"];
  const checkboxVariants = ["Blue", "Red", "Green", "Mustard"];
  const checkboxSizes = ["XS", "S", "M", "L", "XL"];



  const [state, setState] = React.useState<Product>({
    _id: "",
    name: "",
    description: "",
    categories: [],
    variants: [],
    sizes: [],
    img: "",
  });

  const handleCheckboxChange = (event: any, checked: boolean) => {
    console.log("checked", checked);
    const { value } = event.target;
    if (checked) {
      setState({
        ...state,
        categories: [value, ...state.categories],
      });
    }

    if (!checked) {
      const filteredCats = state.categories.filter((cat) => cat !== value);
      setState({
        ...state,
        categories: filteredCats,
      });
    }
  };

  const handleCheckboxChangeVariants = (event: any, checked: boolean) => {
    console.log("checked", checked);
    const { value } = event.target;
    if (checked) {
      setState({
        ...state,
        variants: [value, ...state.variants],
      });
    }

    if (!checked) {
      const filteredVars = state.variants.filter((cat) => cat !== value);
      setState({
        ...state,
        variants: filteredVars,
      });
    }
  };

  
  const handleCheckboxChangeSizes = (event: any, checked: boolean) => {
    console.log("checked", checked);
    const { value } = event.target;
    if (checked) {
      setState({
        ...state,
        variants: [value, ...state.sizes],
      });
    }

    if (!checked) {
      const filteredsize = state.sizes.filter((cat) => cat !== value);
      setState({
        ...state,
        variants: filteredsize,
      });
    }
  };

  console.log(state);
  const { _id, name, description, categories, variants, sizes, img } = state;

  const products = useSelector((state: AppState) => state.product.products);
  const {token} = useSelector((state: AppState) => state.login);


  console.log(products);
  const navigate = useNavigate();

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct: Product = {
      name,
      description,
      categories: [],
      variants: [],
      sizes: [],
      img,
      _id: "",
    };
    console.log(newProduct);
    dispatch(addProduct(token, newProduct));
    navigate('/products')
    alert('Product added!')
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "variants") {
      const variants = value.split(",");
      setState({ ...state, variants: variants });
      console.log(variants);
      return;
    }
    if (name === "sizes") {
      const sizes = value.split(",");
      setState({ ...state, sizes: sizes });
      console.log(sizes);
      return;
    }

    setState({ ...state, [name]: value });
  };

  
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
            name="name"
          />

          <TextField
            id="outlined-helperText"
            label="Description"
            onChange={handleChange}
            value={description}
            name="description"
          />

          <TextField
            id="outlined-helperText"
            label="Categories"
            onChange={handleChange}
            value={categories}
            name="categories"
          />
          <TextField
            id="outlined-helperText"
            label="Variants"
            onChange={handleChange}
            value={variants}
            name="variants"
          />
          <TextField
            id="outlined-helperText"
            label="Sizes"
            onChange={handleChange}
            value={sizes}
            name="sizes"
          />
          <TextField
            id="outlined-helperText"
            label="image"
            onChange={handleChange}
            value={img}
            name="img"
          />
        </div>
        <h4>Categories:</h4>
        <CheckBoxGroup list={checkboxCategories} handleChange={handleCheckboxChange} />
        <h4>Variants:</h4>
        <CheckBoxGroup list={checkboxVariants} handleChange={handleCheckboxChangeVariants} />
        <h4>Sizes</h4>
        <CheckBoxGroup list={checkboxSizes} handleChange={handleCheckboxChangeSizes} />
        <br/>
        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
          Add Product
        </Button>
      </Box>
    </>
  );
}          