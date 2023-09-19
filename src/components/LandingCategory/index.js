import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LandingCategory = (props) => {
  const { background, title, link } = props

  return (
    <Link to={link} style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: { md: 280, xs: 220 },
          height: { md: 280, xs: 140 },
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '32px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            textAlign: 'center',
            transition: 'background-color 1s',

            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
            },
          }}
        >
          {title.split('\n').map((str, index) => (
            <Typography key={index} variant="span" sx={{ fontSize: { md: '17px', xs: '13px' } }}>
              {str}
            </Typography>
          ))}
        </Box>
      </Box>
    </Link>
  )
}

export default LandingCategory
