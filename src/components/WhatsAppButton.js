import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();

  const phoneNumber = '905522995984';
  const message = encodeURIComponent('Merhaba, bilgi almak istiyorum.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <Tooltip title={t('contact.social.whatsapp')} placement="left" arrow>
        <Fab
          color="success"
          aria-label="whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            zIndex: 1000,
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)',
              },
              '70%': {
                boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)',
              },
              '100%': {
                boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default WhatsAppButton;
