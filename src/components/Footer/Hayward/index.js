import { Box, Container, Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box className="hayward-footer">
      <Container>
        <Grid container>
          <Grid item lg={6} sm={7} xs={12}>
            <Typography>
              © 2019 All Right Reserved By <strong>Xcapade</strong>
            </Typography>
          </Grid>
          <Grid item lg={6} sm={5} xs={12}>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className={`fa fa-facebook`}></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={`fa fa-instagram`}></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={`fa fa-twitter`}></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={`fa fa-youtube`}></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={`fa fa-vimeo`}></i>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
