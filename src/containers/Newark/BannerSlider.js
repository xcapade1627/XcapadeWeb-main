import { Box, Button, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import slider1 from '../../assets/img/sliders/aloneslider.png'
import slider2 from '../../assets/img/sliders/pixelslider.jpeg'
import slider3 from '../../assets/img/sliders/Spiritualism.jpg'
import slider4 from '../../assets/img/sliders/Homunculus.jpg'
import slider5 from '../../assets/img/sliders/thanksgiving2.png'

const sliders = [
  {
    title: 'Up to 40% off',
    img: slider5,
    description: '',
    link: 'https://fareharbor.com/embeds/book/xcapade/items/500809/?full-items=yes&flow=19606',
  },
  {
    title: 'ALONE',
    img: slider1,
    description: 'Rank #1 storytelling awards 2023',
    link: 'https://fareharbor.com/embeds/book/xcapade/items/430000/?full-items=yes&flow=895458',
  },
  {
    title: 'Pixel Planet',
    img: slider2,
    description: 'Are you ready to rescue Jabob?',
    link: 'https://fareharbor.com/embeds/book/xcapade/items/440595/?full-items=yes&flow=895458',
  },
  {
    title: 'Spiritualism',
    img: slider3,
    description: 'Explore the darkest secret within the soul of Winnie',
    link: 'https://fareharbor.com/embeds/book/xcapade/items/440597/?full-items=yes&flow=895458',
  },
  {
    title: 'Homunculus',
    img: slider4,
    description: 'Monsters in the Flask',
    link: 'https://fareharbor.com/embeds/book/xcapade/items/489668/?full-items=yes&flow=895458',
  },
]

const BannerSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'
    },
  }

  return (
    <Swiper
      pagination={pagination}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="banner-slider"
    >
      {sliders.map((slider, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              backgroundImage: `url(${slider.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              minHeight: '648px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 400,
                textAlign: 'center',
                mt: '-10%',
              }}
            >
              <Typography
                variant="span"
                sx={{
                  color: '#CC3727',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontSize: { md: '36px', xs: '24px' },
                  fontWeight: '600',
                  fontFamily: 'Post No Bills',
                }}
              >
                {slider.title}
              </Typography>
              <Typography
                variant="span"
                sx={{
                  textTransform: 'uppercase',
                  fontSize: { md: '24px', xs: '15px' },
                  lineHeight: 1.5,
                  fontWeight: '800',
                  fontFamily: 'Post No Bills',
                  letterSpacing: '0.15em',
                }}
              >
                {slider.description}
              </Typography>

              <a href={slider.link}>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: 6,
                    textTransform: 'capitalize',
                    mt: 6,
                    fontSize: { md: '17px', xs: '11px' },
                  }}
                >
                  Book Now
                </Button>
              </a>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerSlider
