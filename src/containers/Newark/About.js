import { Box, Grid, Typography } from '@mui/material'

import wall1 from '../../assets/img/wall/wall2.jpg'

const WallOfFame = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
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
        ABOUT XCAPADE
      </Typography>
      <Typography
        sx={{
          fontSize: { md: '40px', xs: '17px' },
          fontWeight: 500,
          letterSpacing: '0.02em',
          lineHeight: 1.5,
          mt: { md: 2, xs: 3 },
          textAlign: 'center',
        }}
      >
        SHOW YOUR TEAM SPIRIT WITH OUR COMPETITION MODULE
      </Typography>
      <Box mt={{ md: 6, xs: 3 }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item md={9} xs={12}>
            <Typography sx={{ lineHeight: '32px', letterSpacing: '0.01em', px: { md: 0, xs: 5 } }}>
              We have been working with different organizations and companies to bring this new form
              of entertainment to the Bay Area.Therefore, we have officially launched our "Business
              Training (Corporate Training)" mode, which uses live "Room Escape" games to strengthen
              communication and bonding between teammates. Of course, the team's problem-solving and
              critical thinking skills will also be put to the test. In addition, we welcome
              individual groups to rent out entire "Room Escape" themes for their private events. We
              guarantee a brand new experience unlike any other.If you have any questions or would
              like to have more information, please contact us at info@xcapade.co or 650-867-1518.
            </Typography>
          </Grid>
          <Grid item container rowSpacing={3} md={3} xs={12}>
            <Grid
              item
              xs={12}
              sx={{
                '& img': {
                  borderRadius: '16px',
                  maxWidth: { md: '256px', xs: 'calc(100% - 80px)' },
                  mx: { md: 0, xs: 5 },
                },
              }}
            >
              <img src={wall1} alt="Wall" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                '& img': {
                  borderRadius: '16px',
                  maxWidth: { md: '256px', xs: 'calc(100% - 80px)' },
                  mx: { md: 0, xs: 5 },
                },
              }}
            >
              <img src={wall1} alt="Wall" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default WallOfFame
