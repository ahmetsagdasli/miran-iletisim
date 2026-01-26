import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            '& .card-image': {
              transform: 'scale(1.1)',
            },
            '& .card-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 180,
            overflow: 'hidden',
            bgcolor: 'primary.main',
          }}
        >
          <CardMedia
            component="div"
            className="card-image"
            sx={{
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
              opacity: 0.7,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              className="card-icon"
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
            >
              <Icon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
          </Box>
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
