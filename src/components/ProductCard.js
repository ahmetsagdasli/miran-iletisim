import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: '100%',
          textAlign: 'center',
          p: 2,
          background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
          border: '1px solid rgba(21, 101, 192, 0.1)',
          '&:hover': {
            '& .product-icon': {
              bgcolor: 'primary.main',
              '& svg': {
                color: 'white',
              },
            },
          },
        }}
      >
        <CardContent>
          <Box
            className="product-icon"
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              bgcolor: 'rgba(21, 101, 192, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
              transition: 'all 0.3s ease',
            }}
          >
            <Icon
              sx={{
                fontSize: 50,
                color: 'primary.main',
                transition: 'color 0.3s ease',
              }}
            />
          </Box>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
