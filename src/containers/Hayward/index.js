import { Box } from '@mui/material'

import HaywardHeader from '../../components/Header/Hayward'
import Footer from '../../components/Footer/Hayward'
import About from './About'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Featured from './Featured'
import MainBanner from './MainBanner'
import Themes from './Themes'
import WallOfFame from './WallOfFame'

const Hayward = () => {
  return (
    <Box id="hayward">
      <HaywardHeader />
      <MainBanner />
      <Featured />
      <Themes />
      <WallOfFame />
      <About />
      <FAQ />
      <ContactUs />
      <Footer />
    </Box>
  )
}
export default Hayward
