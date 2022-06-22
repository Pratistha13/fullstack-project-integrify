import { Container } from '@material-ui/core'
import Footer from './Footer'
import NavBar from './NavBar'
import Slider from './Slider'

const HomeLandPage = () => {

  return (
    <Container maxWidth="lg">
    <NavBar />
    <Slider />
    <Footer />
    </Container>
  )
}

export default HomeLandPage