import { Box, Container, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import 'react-image-lightbox/style.css'

const protocol = 'https'
// photoCount values: 3 - 12
const photoCount = 9
// photoSize values: 'small' (200 pixels wide) or 'large' (est 1024 pixels wide)
const photoSize = 'large'
const subdomain = 'xcapade951'
const xmlhttp = new XMLHttpRequest()

const WallOfFame = () => {
  useEffect(() => {
    xmlhttp.open(
      'GET',
      protocol +
        '://' +
        subdomain +
        '.escapegamesglobalsites.com/site/teamPhotoWidget?size=' +
        photoSize +
        '&count=' +
        photoCount +
        '&protocol=' +
        protocol,
      true
    )
    xmlhttp.onload = () => {
      if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
        document.getElementById('photos-gallery').innerHTML = xmlhttp.responseText
      }
    }

    xmlhttp.send()
  }, [])

  return (
    <Box id="gallery" sx={{ pt: '120px', pb: '90px', bgcolor: '#152D28' }}>
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
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Wall Of Fame
              <Typography
                component="span"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-4px',
                  transform: 'translateX(-50%)',
                  width: '45px',
                  background: 'linear-gradient(90deg,#8cf3fe,#67a9ff)',
                  height: '3px',
                  borderRadius: '3px',
                }}
              />
            </Typography>
            <Typography sx={{ color: '#fff', textAlign: 'center', fontWeight: 500 }}>
              See our most recent winner groups.
            </Typography>
          </Grid>
        </Grid>
        <Box id="photos-gallery" />
      </Container>
    </Box>
  )
}
export default WallOfFame
