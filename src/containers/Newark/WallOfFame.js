import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import 'react-image-lightbox/style.css'

const protocol = 'https'
// photoCount values: 3 - 12
const photoCount = 27
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
    <Box display="flex" flexDirection="column" alignItems="center" mt={{ md: 20, xs: 5 }}>
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
        Wall Of Fame
      </Typography>
      <Box id="photos-gallery" mt={{ md: 4, xs: 3 }} />
    </Box>
  )
}

export default WallOfFame
