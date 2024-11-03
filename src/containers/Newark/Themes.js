import { Box, Grid, Typography } from '@mui/material'

import themeImg1 from '../../assets/img/themes/newark/alone3.jpg'
import themeImg2 from '../../assets/img/themes/newark/pixel.jpg'
import themeImg3 from '../../assets/img/themes/newark/spiritualism.jpg'
import themeImg4 from '../../assets/img/themes/newark/homunculus.jpg'
import themeImg5 from '../../assets/img/themes/newark/6.jpg'
import Statistic from './Statistic'
import ThemeCard from './ThemeCard'

const themes = [
  {
    type: 'Story-Telling',
    title: 'Alone',
    players: '2-8',
    time: '1.5 hours',
    difficulty: '3.5/5',
    description: 'No Real Person',
    img: themeImg1,
    link: 'https://fareharbor.com/embeds/book/xcapade/items/430000/?full-items=yes&flow=895458',
    book: 'Book',
  },
  {
    type: 'Amusement Land',
    title: 'Pixel Planet',
    players: '2-6',
    time: '1.5 hours',
    difficulty: '3/5',
    description: 'Real People in the Room!',
    img: themeImg2,
    link: 'https://fareharbor.com/embeds/book/xcapade/items/440595/?full-items=yes&flow=895458',
    book: 'Book',
  },

  {
    type: 'Interactive Drama',
    title: 'Homunculus',
    players: '4-10',
    time: '2 hours',
    difficulty: '4/5',
    description: 'Real People in the Room!',
    img: themeImg4,
    link: 'https://fareharbor.com/embeds/book/xcapade/items/489668/?full-items=yes&flow=895458',
    book: 'Book',
  },
  {
    type: 'Murder Mystery',
    title: 'Seven Days in Captivity',
    players: '7',
    time: '4 hours',
    difficulty: '4/5',
    description: 'Tabletop Mysteries',
    img: themeImg5,
    link: 'https://fareharbor.com/embeds/book/xcapade/items/384309/?full-items=yes&flow=895458',
    book: 'Book',
  },
  {
    type: 'Horror & Mysterious',
    title: 'Spiritualism',
    players: '2-10',
    time: '1.5 hours',
    difficulty: '3.5/5',
    description: 'Real People in the Room!',
    img: themeImg3,
    link: '#',
    book: 'Coming Soon',
  },
]

const Themes = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={{ md: 10, xs: 5 }}>
      <Typography
        variant="span"
        sx={{
          color: '#CC3727',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontSize: { md: '24px', xs: '15px' },
          fontWeight: '600',
          fontFamily: 'Post No Bills',
        }}
      >
        Themes
      </Typography>
      <Box mt={{ md: 4, xs: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {themes.map((theme, index) => (
            <Grid key={index} item md={6} xs={12}>
              <ThemeCard {...theme} />
            </Grid>
          ))}
        </Grid>
        <Statistic />
      </Box>
    </Box>
  )
}

export default Themes
