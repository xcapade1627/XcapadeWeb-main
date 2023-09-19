import { Link } from 'react-scroll'
import { Box, Container, Grid, Typography } from '@mui/material'

import about from '../../assets/img/about.jpg'

const About = () => {
  return (
    <Box id="about" className="hayward-about">
      <Container>
        <Grid container>
          <Grid item lg={8} md={7} xs={12}>
            <Grid item className="about-content">
              <Typography component="h2">
                Show your team spirit with our competition module
              </Typography>
              <Typography>
                We have been working with different organizations and companies to bring this new
                form of entertainment to the Bay Area.
                <br />
                Therefore, we have officially launched our "Business Training (Corporate Training)"
                mode, which uses live "Room Escape" games to strengthen communication and bonding
                between teammates. <br />
                Of course, the team's problem-solving and critical thinking skills will also be put
                to the test. In addition, we welcome individual groups to rent out entire "Room
                Escape" themes for their private events. We guarantee a brand new experience unlike
                any other.
                <br />
                If you have any questions or would like to have more information, please contact us
                at info@xcapade.co or 650-867-1518.
              </Typography>
              <Link spy smooth to="faq" className="loadmore">
                Learn More
              </Link>
            </Grid>
          </Grid>
          <Grid item lg={4} md={5} sm={10}>
            <Box className="about-img" mr={{ md: '70px', xs: 0 }}>
              <img src={about} alt="Team" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default About
