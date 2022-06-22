import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useNavigate, useParams } from 'react-router'

import useProduct from '../../custom-hook/useProduct'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 90,
      textAlign: 'center',
      width: '30%',
      minWidth: 345,
    },

    button: {
      marginTop: '20',
      marginLeft: '250',
    },
  })
)
type Params = {
  productName: string
}

const ProductProfile = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { productName } = useParams<Params>()

  const productData = useProduct()

  const details = (productData).find(
    (p: { name:string}) => p.name === productName
  )
  return (
    <>
      {productData.length !== 0 && details && (
        <>
          <Grid container justifyContent="center">
            <Card className={classes.root}>
              <img
                src={details.img}
                style={{ width: '345px' }}
                alt="productImage"
              />
              <CardContent>
                <Typography variant="h4" component="h2">
                  {details.name}
                </Typography>
                <br></br>
                <Typography>
                  Product is well described as:{' '}
                  {details.description}
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {details.name} that you have selected are available in :{' '}
                  {details.sizes && details.sizes.join(',')}
                  {!details.sizes && <p>No sizes found for this Product</p>}
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Colours available are:{' '}
                  {Object.values(details.variants).join(',')}
                </Typography>
                <p></p>
                <p></p>
                <Button
                  variant="contained"
                  onClick={() => navigate('/start')}
                  color="primary"
                  className={classes.button}
                >
                  Back
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </>
  )
}

export default ProductProfile