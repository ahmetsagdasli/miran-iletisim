import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ComputerIcon from '@mui/icons-material/Computer';
import WifiIcon from '@mui/icons-material/Wifi';
import RouterIcon from '@mui/icons-material/Router';

const ProductsPage = () => {
  const { t } = useTranslation();

  const products = [
    {
      key: 'electronics',
      icon: ElectricalServicesIcon,
    },
    {
      key: 'computers',
      icon: ComputerIcon,
    },
    {
      key: 'internet',
      icon: WifiIcon,
    },
    {
      key: 'modem',
      icon: RouterIcon,
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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          background: 'linear-gradient(180deg, rgba(21, 101, 192, 0.05) 0%, transparent 100%)',
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
            {t('products.title')}
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
            {t('products.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} key={product.key}>
              <ProductCard
                title={t(`products.items.${product.key}.title`)}
                description={t(`products.items.${product.key}.description`)}
                icon={product.icon}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsPage;
