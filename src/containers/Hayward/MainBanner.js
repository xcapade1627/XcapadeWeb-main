import { Box, Button, Container, Grid, Typography } from '@mui/material'

import background from '../../assets/img/sliders/fullmoon.jpg'

const MainBanner = () => {
  return (
    <Box
      id="home"
      sx={{
        background: `url(${background}) no-repeat center center / cover`,
        height: 775,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container justifyContent={{ md: 'flex-start', xs: 'center' }}>
          <Grid item md={7} lg={5}>
            <Box>
              <Typography
                component={'h2'}
                sx={{
                  fontSize: '42px',
                  fontFamily: 'Sriracha,cursive !important',
                  fontWeight: 400,
                  color: '#fff',
                  textShadow: '2px 2px #000',
                  mb: '30px',
                }}
              >
                Are you ready to{' '}
                <Typography
                  component={'span'}
                  sx={{
                    fontSize: '42px',
                    fontFamily: 'Sriracha,cursive !important',
                    fontWeight: 400,
                    textShadow: '2px 2px #000',
                    color: '#ab3a38',
                  }}
                >
                  find the professor?
                </Typography>
              </Typography>
              <Typography
                component={'h2'}
                sx={{
                  fontSize: '30px',
                  fontFamily: 'Sriracha,cursive !important',
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                An immersive and interactive experience.
              </Typography>
              <br />
              <a href="https://fareharbor.com/embeds/book/xcapade/?full-items=yes&flow=895454">
                <Button
                  sx={{
                    padding: '10px 30px',
                    border: '2px solid #fff',
                    color: '#fff',
                    fontWeight: 600,
                    background: 'transparent',
                    mt: 6,
                  }}
                >
                  BOOK NOW
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default MainBanner
