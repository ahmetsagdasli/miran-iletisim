import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  WhatsApp,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/hakkimizda' },
    { label: t('nav.products'), path: '/urunler' },
    { label: t('nav.services'), path: '/hizmetler' },
    { label: t('nav.contact'), path: '/iletisim' },
  ];

  const services = [
    t('services.items.telecom.title'),
    t('services.items.logistics.title'),
    t('services.items.consulting.title'),
    t('services.items.tourism.title'),
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.dark',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="MİRAN Logo"
                sx={{
                  height: 70,
                  width: 'auto',
                  mr: 1.5,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                MİRAN
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              {t('footer.description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://wa.me/905522995984"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': {
                    color: 'white',
                    bgcolor: '#25D366',
                    borderColor: '#25D366',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'white',
              }}
            >
              {t('footer.quickLinks')}
            </Typography>
            <Box component="nav">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    py: 0.75,
                    '&:hover': {
                      color: 'white',
                      pl: 1,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'white',
              }}
            >
              {t('footer.services')}
            </Typography>
            <Box>
              {services.map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    py: 0.75,
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'white',
              }}
            >
              {t('footer.contact')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOn sx={{ color: 'primary.light', mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {t('contact.info.address')}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ color: 'primary.light' }} />
                <Link
                  href="mailto:miran.iletisimlojistik@hotmail.com"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  {t('contact.info.email')}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ color: 'primary.light' }} />
                <Link
                  href="tel:+905325525984"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  {t('contact.info.phone')}
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.5)', textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} MİRAN İLETİŞİM LOJİSTİK. {t('footer.rights')}
          </Typography>
          <Link
            href="http://miraniletisimlojistiktur.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              '&:hover': { color: 'white' },
            }}
          >
            miraniletisimlojistiktur.com.tr
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
