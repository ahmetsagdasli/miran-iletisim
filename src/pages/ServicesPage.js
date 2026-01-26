import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LanguageIcon from '@mui/icons-material/Language';

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'telecom',
      icon: PhoneInTalkIcon,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    },
    {
      key: 'logistics',
      icon: LocalShippingIcon,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    {
      key: 'consulting',
      icon: BusinessCenterIcon,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
      key: 'tourism',
      icon: FlightTakeoffIcon,
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    },
    {
      key: 'industrial',
      icon: PrecisionManufacturingIcon,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    },
    {
      key: 'internet',
      icon: LanguageIcon,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    },
  ];

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        minHeight: '100vh',
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
            {t('services.title')}
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
            {t('services.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.key}>
              <ServiceCard
                title={t(`services.items.${service.key}.title`)}
                description={t(`services.items.${service.key}.description`)}
                icon={service.icon}
                image={service.image}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
