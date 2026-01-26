import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const HomePage = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: PhoneInTalkIcon, label: t('services.items.telecom.title'), color: '#1565C0' },
    { icon: LocalShippingIcon, label: t('services.items.logistics.title'), color: '#00897B' },
    { icon: BusinessCenterIcon, label: t('services.items.consulting.title'), color: '#5C6BC0' },
    { icon: FlightTakeoffIcon, label: t('services.items.tourism.title'), color: '#FF7043' },
  ];

  return (
    <Box>
      <HeroSlider />

      {/* Introduction Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              {t('home.welcome')}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                mb: 6,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              {t('home.intro')}
            </Typography>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: 'text.primary',
              }}
            >
              {t('home.servicesTitle')}
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {highlights.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: item.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 10px 30px ${item.color}20`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        bgcolor: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <item.icon sx={{ fontSize: 30, color: item.color }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: 'text.primary' }}
                    >
                      {item.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/hizmetler"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              {t('nav.services')}
            </Button>
            <Button
              component={Link}
              to="/iletisim"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              {t('nav.contact')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
