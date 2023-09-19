import { Grid, Typography } from '@mui/material'

import { ICONS } from '../../components/Icons'

const data = [
  {
    icon: ICONS.GROUP,
    value: '16,500+',
    title: 'Fans played',
  },
  {
    icon: ICONS.MODE,
    value: '4+',
    title: 'Modes available',
  },
  {
    icon: ICONS.CHAT,
    value: '45%',
    title: 'Escape rate',
  },
]

const Statistic = () => {
  return (
    <Grid container sx={{ mt: { md: 20, xs: 10 } }}>
      {data.map((sta, index) => (
        <Grid
          key={index}
          item
          md={4}
          xs={12}
          display="flex"
          flexDirection="column"
          sx={{ mb: { md: 0, xs: 8 } }}
        >
          <img src={sta.icon} alt="Xcapade" height="25px" />
          <Typography
            sx={{ fontSize: '40px', lineHeight: '60px', textAlign: 'center', mt: '10px' }}
          >
            {sta.value}
          </Typography>
          <Typography sx={{ lineHeight: '26px', textAlign: 'center', mt: 2 }}>
            {sta.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default Statistic
