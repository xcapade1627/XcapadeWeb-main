import { Box, Grid, Typography } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'

import LandingCategory from '../../components/LandingCategory'
import { Background, Banners, LOGO } from '../../components/Icons'

const BannerList = [
  {
    title: 'Hayward, CA',
    link: './hayward',
    img: Banners[0],
  },
  {
    title: 'Newark, CA',
    link: './newark',
    img: Banners[1],
  },
  {
    title: 'Murder Mystery Larping',
    link: 'https://www.mm.xcapade.co/?lang=en',
    img: Banners[2],
  },
]

const Center = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}))

const Landing = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background.LANDING})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height={'100vh'}
      >
        <Grid item xs={2} md={3}>
          <Center
            sx={{
              '& img': {
                height: { md: '64px', xs: '48px' },
              },
            }}
          >
            <img src={LOGO.normal} alt="Xcapade" />
          </Center>
        </Grid>
        <Grid item xs={8} md={6}>
          <Center>
            <Grid container spacing={{ md: 8, xs: 3 }}>
              {BannerList.map((banner, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <LandingCategory
                    background={banner.img}
                    title={banner.title}
                    link={banner.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Center>
        </Grid>
        <Grid item xs={2} md={3}>
          <Center>
            <Typography variant="span" mt={3}>
              interactive. immersive. intriguing.
            </Typography>
          </Center>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Landing
