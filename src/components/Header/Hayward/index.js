import { useState } from 'react'
import { Box, Button, Container, Grid, MenuItem, Select } from '@mui/material'
import Sticky from 'react-sticky-el'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import { locations, menus } from '../../../config/constants'
import { LOGO } from '../../Icons'

const HaywardHeader = () => {
  const navigate = useNavigate()
  const [responsiveMenu, setResponsiveMenu] = useState(false)

  return (
    <Sticky holderCmp="header" className="header-area">
      <Container id="hayward-header">
        <Grid container>
          <Grid item lg={2} md={5} xs={7}>
            <NavLink to="../">
              <img src={LOGO.normal} alt="Xcapade" />
            </NavLink>
          </Grid>
          <Grid item lg={7} className={responsiveMenu ? 'main-menu active' : 'main-menu'}>
            <Box display="flex" justifyContent="flex-end">
              {menus.map((menu, index) => (
                <Box key={index} className="menu-item">
                  <Link
                    activeClass="active"
                    spy
                    smooth
                    offset={0}
                    duration={1000}
                    to={menu.id}
                    onClick={() => setResponsiveMenu(false)}
                  >
                    {menu.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            lg={1}
            md={3}
            xs={4}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Select
              value={locations[0].id}
              sx={{
                color: '#DDDDDD',
                mt: { md: 0, xs: '-8px' },
                '&:before': {
                  display: 'none',
                },
                '& .MuiSelect-select': {
                  mt: '-2px',
                  fontSize: '16px',
                  fontWeight: 500,
                },
                '& svg': {
                  color: '#DDDDDD',
                },
              }}
              variant="standard"
            >
              {locations.map((location, index) => (
                <MenuItem key={index} value={location.id} onClick={() => navigate(location.link)}>
                  {location.title}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item lg={2} md={3} xs={0} px={{ md: 2, xs: 0 }}>
            <a href="https://fareharbor.com/embeds/book/xcapade/items/calendar/?full-items=yes&flow=895454">
              <Button variant="outlined" className="book-button">
                Book Now
              </Button>
            </a>
          </Grid>
          <Grid item md={1} xs={1}>
            <ul
              onClick={() => setResponsiveMenu(!responsiveMenu)}
              className={responsiveMenu ? 'hamburger-menu active' : 'hamburger-menu'}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Sticky>
  )
}
export default HaywardHeader
