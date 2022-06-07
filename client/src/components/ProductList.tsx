import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { AppState, Product } from '../types'
import { fetchAllProduct } from '../redux/actions/product'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      flexShrink: 1,
    },
    card: {
      width: '90%',
      margin: '0 auto',
      boxShadow: 'none',
    },
    mainCard: {
      width: '60%',
      margin: '0 auto',
      boxShadow: 'none',
    },
    cardContent: {
      padding: '10px 0',
    },
  })
)

const ProductsList = () => {
  const classes = useStyles()
  const products = useSelector((state: AppState) => state.product.products)
  const dispatch = useDispatch<any>();

  const handleFetchProducts = () => {
    dispatch(fetchAllProduct());
  };


  return (
    <>
      <div className="category-header-wrapper">
          <Card className={classes.mainCard}>
            <Link to={`/product/${products[0].id}`}>
              <CardMedia
                component="img"
                src={products[0].img}
                title={products[0].name}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className="product-name"
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  {products[0].name}
                </Typography>

              </CardContent>
            </Link>
          </Card>
          <button onClick={handleFetchProducts}>Fetch product</button>
        </div>
      <Grid container className={classes.root} spacing={2}>
        {products.slice(1).map((product: Product) => {
          return (
            <Grid key={product.id} item xs={3}>
              <Card className={classes.card}>
                <Link to={`/products/${product.id}`}>
                  <CardMedia
                    component="img"
                    src={product.img}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className="product-name"
                      variant="h6"
                      color="textPrimary"
                      component="p"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {product.categories}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ProductsList

