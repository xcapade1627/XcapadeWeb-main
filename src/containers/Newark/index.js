import { useState } from 'react'
import { Box } from '@mui/material'
import NewarkHeader from '../../components/Header/Newark'
import BannerSlider from './BannerSlider'
import Themes from './Themes'
import WallOfFame from './WallOfFame'
import About from './About'
import FAQ from './FAQ'
import Footer from '../../components/Footer/Newark'

const Newark = () => {
  return (
    <Box id="newark" sx={{ background: '#0E0E0E', backdropFilter: 'blur(20px)' }}>
      <NewarkHeader />
      <BannerSlider />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ maxWidth: '800px' }}>
          <Themes />
          <WallOfFame />
          <About />
          <FAQ />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Newark
