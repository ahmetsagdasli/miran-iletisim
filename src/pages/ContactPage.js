import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactPage = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: LocationOnIcon,
      label: t('contact.info.address'),
      color: '#1565C0',
    },
    {
      icon: EmailIcon,
      label: t('contact.info.email'),
      href: 'mailto:info@miraniletisimlojistiktur.com.tr',
      color: '#00897B',
    },
    {
      icon: PhoneIcon,
      label: t('contact.info.phone'),
      href: 'tel:+905325525984',
      color: '#5C6BC0',
    },
    {
      icon: AccessTimeIcon,
      label: t('contact.info.workHours'),
      color: '#FF7043',
    },
  ];

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 12 },
        bgcolor: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.03) 0%, rgba(21, 101, 192, 0.08) 100%)',
          borderRadius: '0 0 0 50%',
          display: { xs: 'none', md: 'block' },
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            {t('contact.title')}
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 2,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 8,
              fontWeight: 400,
            }}
          >
            {t('contact.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <ContactForm />
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                {t('contact.info.title')}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        bgcolor: `${info.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <info.icon sx={{ color: info.color }} />
                    </Box>
                    {info.href ? (
                      <Link
                        href={info.href}
                        sx={{
                          color: 'text.primary',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {info.label}
                      </Link>
                    ) : (
                      <Typography variant="body1" color="text.primary">
                        {info.label}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                {t('contact.social.title')}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://wa.me/905522995984"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: '#25D36615',
                    color: '#25D366',
                    '&:hover': {
                      bgcolor: '#25D366',
                      color: 'white',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
