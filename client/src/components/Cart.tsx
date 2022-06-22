import React from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import {
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { AppState } from '../types'
import { removeProductfromCart } from '../redux/actions/cart'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 90,
      textAlign: 'center',
      width: '100%',
    },

    sideBar: {
      width: '300px',
      textAlign: 'center',
    },
  })
)

type ProductProps = {
  name: string
  description: string
  img: string
}

const Cart = () => {
  const classes = useStyles()
  const cartState = useSelector((state: AppState) => state.cart.cart)
  const dispatch = useDispatch<any>()

  return (
    <Grid container className={classes.sideBar} justifyContent="center">
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: 'center', display: 'inline-block' }}
      >
        {cartState.length === 0 && <p> No Products in Cart </p>}
        {cartState.length !== 0 && <p> Products in Cart </p>}
      </Typography>
      {cartState.map(
        (item: ProductProps, index: React.Key | null | undefined) => (
          <Card className={classes.root} key={index}>
            <CardContent>
              <img src={item.img} style={{ width: '80px' }} alt="productImage" />

              <Typography variant="h5" color="textSecondary">
              <Link
                        to={`/${item.name}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.name}
                      </Link>
                
              </Typography>
              <DeleteIcon
                onClick={() => dispatch(removeProductfromCart(item))}
                cursor="pointer"
              />
            </CardContent>
          </Card>
        )
      )}
    </Grid>
  )
}

export default Cart