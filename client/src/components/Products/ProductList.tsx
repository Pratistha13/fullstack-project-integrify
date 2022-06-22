import {
  Button,
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { useEffect } from "react";

import { deleteProduct, fetchAllProduct } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState, ProductState } from "../../types";
import { addProductToCart } from "../../redux/actions/cart";
import { Link, useNavigate } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import NavBar from "../../pages/HomePage/NavBar";
import Footer from "../../pages/HomePage/Footer";

const Products = ({ products }: ProductState) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const productFetched = useSelector(
    (state: AppState) => state.product.products
  );

  const { token } = useSelector((state: AppState) => state.login);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [products]);

  return (
    <>
      <NavBar />
      <Button
        style={{ backgroundColor: "turquoise", color: "#fff" }}
        onClick={() => navigate("/productForm")}
      >
        Create Product
      </Button>
      <br/>
      <br/>

      <Button
                  style={{ backgroundColor: "turquoise", color: "#fff" }}
                  onClick={() =>navigate(`/admin`)}
                >
                  Back
                </Button>

      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Variant</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          {productFetched.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <Link
                  to={`/${item.name}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.name}
                </Link>
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.categories}</TableCell>
              <TableCell>{item.sizes}</TableCell>
              <TableCell>{item.variants}</TableCell>
              <TableCell>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=248&fit=crop&auto=format`} />
                  </ImageListItem>
                ))}
              </TableCell>

              <TableCell style={{ display: "flex", gap: "2px" }}>
                <Button
                  style={{ backgroundColor: "green", color: "#fff" }}
                  onClick={() => dispatch(addProductToCart(item))}
                >
                  Add To Cart
                </Button>
                <Button
                  style={{ backgroundColor: "red", color: "#fff" }}
                  onClick={() => dispatch(deleteProduct(token, item._id))}
                >
                  Delete Product
                </Button>

                <Button
                  style={{ backgroundColor: "lime", color: "#fff" }}
                  onClick={() => navigate(`/productEdit/${item._id}`)}
                >
                  Edit Product
                </Button>
              </TableCell>
              
            </TableRow>
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Bed",
    author: "swabdesign",
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  //   title: 'Books',
  //   author: 'Pavel Nekoranec',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80',
  //   title: 'Sink',
  //   author: 'Charles Deluvio',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   title: 'Kitchen',
  //   author: 'Christian Mackie',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  //   title: 'Blinds',
  //   author: 'Darren Richardson',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   title: 'Chairs',
  //   author: 'Taylor Simpson',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   title: 'Laptop',
  //   author: 'Ben Kolde',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  //   title: 'Doors',
  //   author: 'Philipp Berndt',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //   title: 'Coffee',
  //   author: 'Jen P.',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
  //   title: 'Storage',
  //   author: 'Douglas Sheppard',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80',
  //   title: 'Candle',
  //   author: 'Fi Bell',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  //   title: 'Coffee table',
  //   author: 'Hutomo Abrianto',
  // },
];

export default Products;
