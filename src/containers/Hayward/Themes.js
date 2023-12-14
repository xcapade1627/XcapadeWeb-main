import { Box, Button, Container, Grid, Typography } from '@mui/material'

import offer1 from '../../assets/img/themes/hayward/1.jpg'
import offer2 from '../../assets/img/themes/hayward/2.jpg'
import offer3 from '../../assets/img/themes/hayward/3.jpg'
import offer4 from '../../assets/img/themes/hayward/4.jpg'
import offer5 from '../../assets/img/themes/hayward/5.jpg'
import offer6 from '../../assets/img/themes/hayward/6.jpg'

const themes = [
  
  {
    title: 'Seven Days in Captivity',
    country: 'Murder Mystery',
    newPrice: 'Difficulty: 4/5',
    length: '4 hours',
    headCount: '5-8 players',
    image: offer6,
    isActive: true,
    bookLink: 'https://fareharbor.com/embeds/book/xcapade/items/384309/?full-items=yes&flow=895454',
    bookText: 'Book Now',
  },
  {
    title: 'Hunting Lodge',
    country: 'Mind-Bending',
    newPrice: 'Difficulty: 4.5/5',
    length: '1 hour',
    headCount: '2-8 players',
    image: offer1,
    isActive: false,
    bookLink: 'https://fareharbor.com/embeds/book/xcapade/items/29869/?full-items=yes&flow=895454',
    bookText: 'Book Now',
  },
  {
    title: 'Astres',
    country: 'Murder Mystery',
    newPrice: 'Difficulty: 3/5',
    length: '4 hours',
    headCount: '6 players',
    image: offer4,
    bookLink: 'mailto:info@xcapade.co',
    bookText: 'Coming Soon',
  },
  {
    title: 'Black & White',
    country: 'Competition',
    newPrice: 'Difficulty: 4/5',
    length: '1.5 hours',
    headCount: '4-16 players',
    image: offer5,
    bookLink: 'mailto:info@xcapade.co',
    bookText: 'Coming Soon',
  },
  {
    title: 'Magic Castle',
    country: 'Magic',
    newPrice: 'Difficulty: 3.5/5',
    length: '1.5 hours',
    headCount: '2-10 players',
    image: offer3,
    bookLink: 'mailto:info@xcapade.co',
    bookText: 'Coming Soon',
  },
]

const Themes = () => {
  return (
    <Box id="schedule" sx={{ pt: '120px', pb: '90px', bgcolor: '#ddd' }}>
      <Container>
        <Grid container mb={5}>
          <Grid item md={2} />
          <Grid item xs={12} md={8}>
            <Typography
              component="h2"
              sx={{
                fontSize: '26px',
                textTransform: 'capitalize',
                fontWeight: 700,
                paddingBottom: '25px',
                position: 'relative',
                marginBottom: '25px',
                lineHeight: '20px',
                color: '#000',
                textAlign: 'center',
              }}
            >
              Themes
              <Typography
                component="span"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-4px',
                  transform: 'translateX(-50%)',
                  width: '45px',
                  background: '#73ae20',
                  height: '3px',
                  borderRadius: '3px',
                }}
              />
            </Typography>
            <Typography sx={{ color: '#000', textAlign: 'center', fontWeight: 500 }}>
              Our games varies from super recreational to tough mind-bending.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {themes.map((theme, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <Box
                sx={{
                  background: `url(${theme.image}) no-repeat center center / cover`,
                  height: '525px',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: theme.isActive ? 0 : '-76px',
                    background: 'rgba(93,94,94,.85)',
                    textAlign: 'center',
                    width: '100%',
                    padding: '30px 0px',
                    color: '#fff',
                    transition: 'all .3s',

                    '& span': {
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#fff',
                      mb: '5px',
                    },

                    '&:hover': {
                      bottom: 0,
                    },
                  }}
                >
                  <Typography component="h3" sx={{ fontSize: '24px', fontWeight: 700, mb: '5px' }}>
                    {theme.title}
                  </Typography>
                  <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: '5px' }}>
                    {theme.country}
                  </Typography>
                  <Typography component="span">{theme.newPrice}</Typography>
                  <Typography component="span">{theme.headCount}</Typography>
                  <Typography component="span">{theme.length}</Typography>
                  <a href={theme.bookLink}>
                    <Button
                      sx={{
                        background: '#fff',
                        padding: '8px 30px',
                        mt: '15px',
                        fontSize: '16px',
                        fontWeight: 600,
                        borderRadius: '5px',
                        color: '#5d5e5e',
                        textTransform: 'capitalize',

                        '&:hover': {
                          background: '#AE373E',
                          color: '#fff',
                        },
                      }}
                    >
                      {theme.bookText}
                    </Button>
                  </a>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Themes
