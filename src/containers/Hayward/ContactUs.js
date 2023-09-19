import { Box, Container, Grid, Typography } from '@mui/material'

const ContactUs = () => {
  return (
    <Box id="contact" className="hayward-contact">
      <Container>
        <Grid container>
          <Grid item md={2} />
          <Grid item xs={12} md={8}>
            <Typography
              component="h2"
              sx={{
                fontSize: '36px',
                textTransform: 'capitalize',
                fontWeight: 700,
                marginBottom: '35px',
                lineHeight: '24px',
                textAlign: 'center',
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 500, mb: 5 }}>
              Please check our FAQ section for common questions.
            </Typography>
          </Grid>
        </Grid>

        <Box className="contact-info">
          <Grid container>
            <Grid item lg={4}>
              <Typography component="h3">Address</Typography>
              <Typography>1627 Industrial Pkwy W, Hayward, CA 94544</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography component="h3">E-mail</Typography>
              <Typography>info@xcapade.co</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography component="h3">Call us</Typography>
              <Typography>+1 (650) 867-1518</Typography>
            </Grid>
          </Grid>

          <iframe
            title="Xcapade Hayward Address"
            id="circle-example"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.45073014412!2d-122.06926701635946!3d37.618847399704094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f2e368d283c32b!2sXcapade!5e0!3m2!1sen!2sus!4v1569530304758!5m2!1sen!2sus"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  )
}

export default ContactUs
