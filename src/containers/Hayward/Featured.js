import CountUp from 'react-countup'
import { Box, Container, Grid, Typography } from '@mui/material'

const featureds = [
  {
    count: 16500,
    title: 'fans played',
    text: '+',
  },
  {
    count: 4,
    title: 'modes available',
    text: '+',
  },
  {
    count: 45,
    title: 'escape rate',
    text: '%',
  },
]

const Featured = () => {
  return (
    <Box
      sx={{
        padding: '120px 0 90px',
        background: '#ae373e',
      }}
    >
      <Container>
        <Grid container>
          {featureds.map((featured, i) => (
            <Grid key={i} item md={4} sm={6} xs={12} position="relative">
              <Box mb="30px" textAlign="center" color="#fff">
                <Box
                  sx={{
                    fontSize: 32,
                    fontWeight: 700,
                    pb: '25px',
                    mb: '30px',

                    '&::before': {
                      position: 'absolute',
                      left: '50%',
                      bottom: '80px',
                      width: '35px',
                      height: '4px',
                      borderRadius: '10px',
                      transform: 'translateX(-50%)',
                      content: '""',
                      background: 'linear-gradient(90deg, #7ED556 0%, #3A6D3D 100%)',
                    },
                  }}
                >
                  <CountUp
                    duration={10}
                    end={featured.count}
                    useEasing={true}
                    useGrouping={true}
                    separator=","
                    suffix={featured.text}
                  />
                </Box>
                <Typography
                  component={'h3'}
                  sx={{
                    fontSize: '22px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    mb: '20px',
                  }}
                >
                  {featured.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
export default Featured
