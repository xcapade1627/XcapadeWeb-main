import { Box, Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ background: '#070707', p: { md: '80px 40px 40px', xs: '40px' } }}
    >
      <Box sx={{ maxWidth: 800 }}>
        <Grid container>
          <Grid item md={6} xs={12} container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: { md: '24px', xs: '13px' }, fontWeight: 500 }}>
                Phone
              </Typography>
              <Typography sx={{ color: '#2787CC', mt: 2, fontSize: { md: '17px', xs: '13px' } }}>
                909-XCAPADE (+1 909-922-7233)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: { md: '24px', xs: '13px' },
                  fontWeight: 500,
                  mt: { md: 12, xs: 3 },
                }}
              >
                Email
              </Typography>
              <Typography sx={{ color: '#2787CC', mt: 2, fontSize: { md: '17px', xs: '13px' } }}>
                info@xcapde.co
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} container>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: { md: '24px', xs: '17px' },
                  fontWeight: 500,
                  mb: 5,
                  mt: { mb: 0, xs: 5 },
                }}
              >
                Locations
              </Typography>
              <Typography sx={{ fontSize: { md: '20px', xs: '13px' }, fontWeight: 400 }}>
                Hayward
              </Typography>
              <Typography sx={{ color: '#2787CC', mt: 2, fontSize: { md: '17px', xs: '13px' } }}>
                1627 Industrial Pkwy W, Hayward, CA 94544
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: { md: '20px', xs: '13px' }, fontWeight: 400, mt: { md: 4, xs: 3 } }}
              >
                Newark
              </Typography>
              <Typography sx={{ color: '#2787CC', mt: 2, fontSize: { md: '17px', xs: '13px' } }}>
                39143 Cedar Blvd, Newark, CA 94560
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <iframe
            title="Xcapade Hayward Address"
            id="circle-example"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202254.53040548885!2d-122.20371177636564!3d37.62034697829954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf57c2f88f83%3A0x5eec5f8153bb6378!2sXcapade%20Newark!5e0!3m2!1sen!2sus!4v1678695773502!5m2!1sen!2sus"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </Box>
        <Typography
          sx={{
            color: '#999999',
            lineHeight: '32px',
            fontWeight: 400,
            mt: 10,
            fontSize: { md: '17px', xs: '13px' },
          }}
        >
          © 2023 All Right Reserved By Xcapade
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
