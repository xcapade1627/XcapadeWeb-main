import { Box, Button, Container, Select, MenuItem, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import { locations } from '../../../config/constants'

import { LOGO } from '../../Icons'

const NewarkHeader = () => {
  const navigate = useNavigate()

  return (
    <Sticky holderCmp="header" className="header-area">
      <Container sx={{ px: { md: 2, xs: 5 } }}>
        <Box
          pt={{ md: 4, xs: 6 }}
          pb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #333333"
          sx={{
            '& img': {
              display: 'block',
              height: { md: '40px', xs: '24px' },
            },
          }}
        >
          <Link to="../">
            <img src={LOGO.normal} alt="Xcapade" />
          </Link>
          <a href="https://fareharbor.com/embeds/book/xcapade/?full-items=yes&flow=895458">
            <Button
              variant="contained"
              color="error"
              sx={{
                background: '#CC3727',
                borderRadius: 6,
                textTransform: 'capitalize',
                lineHeight: 1,
                height: { md: '40px', xs: '32px' },
                fontSize: { md: '14px', xs: '11px' },
              }}
            >
              Book Now
            </Button>
          </a>
        </Box>
        <Box pt={2} pb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="span" color="#999999">
            Call 909-XCAPADE (909-922-7233)
          </Typography>
          <Select
            value={locations[1].id}
            sx={{
              color: '#DDDDDD',
              '& .MuiSelect-select': {
                py: { md: 2, xs: 0 },
                fontSize: { md: '16px', xs: '13px' },
              },
              '& svg': {
                color: '#DDDDDD',
              },
            }}
          >
            {locations.map((location, index) => (
              <MenuItem key={index} value={location.id} onClick={() => navigate(location.link)}>
                {location.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Container>
    </Sticky>
  )
}

export default NewarkHeader
