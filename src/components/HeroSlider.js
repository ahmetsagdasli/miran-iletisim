import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    key: 'slide1',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 50%, #1A237E 100%)',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  },
  {
    key: 'slide2',
    gradient: 'linear-gradient(135deg, #00897B 0%, #00695C 50%, #004D40 100%)',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
  },
  {
    key: 'slide3',
    gradient: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 50%, #283593 100%)',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80',
  },
  {
    key: 'slide4',
    gradient: 'linear-gradient(135deg, #0277BD 0%, #01579B 50%, #014377 100%)',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
  },
];

const HeroSlider = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    appendDots: (dots) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          '& ul': {
            margin: 0,
            padding: 0,
          },
        }}
      >
        <ul>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.5)',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.8)',
          },
          '.slick-active &': {
            bgcolor: 'white',
            transform: 'scale(1.2)',
          },
        }}
      />
    ),
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '& .slick-slider, & .slick-list, & .slick-track': {
          height: '100%',
        },
        '& .slick-slide > div': {
          height: '100%',
        },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.key}>
            <Box
              sx={{
                height: { xs: '65vh', md: '70vh' },
                minHeight: { xs: 450, md: 500 },
                maxHeight: { xs: 550, md: 650 },
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                background: slide.gradient,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.15,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)',
                },
              }}
            >
              <Container
                maxWidth="lg"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  pt: { xs: 8, md: 6 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 2,
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                    }}
                  >
                    {t(`hero.${slide.key}.title`)}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    {t(`hero.${slide.key}.subtitle`)}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 300,
                      mb: 4,
                      maxWidth: 550,
                      lineHeight: 1.7,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    {t(`hero.${slide.key}.description`)}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                  >
                    <Button
                      component={Link}
                      to="/hizmetler"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        px: 3,
                        py: 1.25,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                      }}
                    >
                      {t('hero.cta1')}
                    </Button>
                    <Button
                      component={Link}
                      to="/iletisim"
                      variant="outlined"
                      size="large"
                      startIcon={<PhoneIcon />}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        borderWidth: 2,
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          borderWidth: 2,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {t('hero.cta2')}
                    </Button>
                  </Stack>
                </motion.div>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
