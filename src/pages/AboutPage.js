import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CategoryIcon from '@mui/icons-material/Category';

const AboutPage = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: FlagIcon,
      title: t('about.mission.title'),
      description: t('about.mission.description'),
      color: '#1565C0',
    },
    {
      icon: VisibilityIcon,
      title: t('about.vision.title'),
      description: t('about.vision.description'),
      color: '#00897B',
    },
    {
      icon: CategoryIcon,
      title: t('about.areas.title'),
      description: t('about.areas.description'),
      color: '#5C6BC0',
    },
  ];

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default', minHeight: '100vh' }}>
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
            {t('about.title')}
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 4,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              mb: 8,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            {t('about.description')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    background: 'white',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: card.color,
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${card.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 2,
                      bgcolor: `${card.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <card.icon sx={{ fontSize: 35, color: card.color }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
