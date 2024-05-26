import { Box, Button, Grid, Typography } from '@mui/material'
import { ICONS } from '../../components/Icons'

const ThemeCard = (props) => {
  const { type, title, players, time, difficulty, description, img, link, book } = props
  return (
    <Box
      sx={{
        background: '#070707',
        borderRadius: '24px',
        maxWidth: { md: '388px', xs: '100%' },
        mx: { md: 0, xs: 5 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: { md: '240px', xs: '180px' },
          px: 4,
          py: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography sx={{ color: '#CC3727', fontSize: { md: '17px', xs: '13px' } }}>
          {type}
        </Typography>
        <Typography sx={{ fontSize: { md: '20px', xs: '17px' } }}>{title}</Typography>
      </Box>
      <Grid container sx={{ p: '24px 32px 32px' }} rowSpacing={2}>
        <Grid item xs={12} display="flex" alignItems="center">
          <img src={ICONS.USER} alt="Xcapade" width="20px" height="17px" />
          <Typography variant="span" ml={1}>
            {players} players
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <img src={ICONS.HOUR} alt="Xcapade" height="23px" />
          <Typography variant="span" ml={1}>
            {time}
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <img src={ICONS.FIRE} alt="Xcapade" height="25px" />
          <Typography variant="span" ml={1}>
            {difficulty} difficulty
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          sx={{ visibility: description ? 'visible' : 'hidden' }}
        >
          <img src={ICONS.GHOST} alt="Xcapade" height="23px" />
          <Typography variant="span" ml={1} sx={{ color: '#CC9E27' }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a href={link}>
            <Button
              variant="contained"
              color="error"
              sx={{
                background: '#CC3727',
                borderRadius: 6,
                textTransform: 'capitalize',
                mt: 2,
                px: 3,
                height: '40px',
              }}
            >
              {book}
            </Button>
          </a>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ThemeCard
