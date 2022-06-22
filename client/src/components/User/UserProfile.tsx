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
  
  import useUser from '../../custom-hook/useUser'
  
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
    userName: string
  }
  
  const UserProfile = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { userName } = useParams<Params>()
  
    const userData = useUser()
  
    const details = (userData).find(
      (u: { firstName: string}) => u.firstName === userName
    )
    return (
      <>
        {userData.length !== 0 && details && (
          <>
            <Grid container justifyContent="center">
              <Card className={classes.root}>
                <img
                  src= "https://via.placeholder.com/750"
                  style={{ width: '345px' }}
                  alt="userImage"
                />
                <CardContent>
                  <Typography variant="h4" component="h2">
                    {details.firstName}.join(',') {details.lastName}
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                  >
                    Email: {details.email}
                    Role: {details.role}

                  </Typography>
                  <br></br>

                  <Button
                    variant="contained"
                    onClick={() => navigate('/users')}
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
  
  export default UserProfile