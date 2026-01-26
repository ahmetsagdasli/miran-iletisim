import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({ scrolled = true }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      sx={{
        '& .MuiButton-root': {
          borderColor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.5)',
          color: scrolled ? 'primary.main' : 'white',
          minWidth: 40,
          '&:hover': {
            borderColor: scrolled ? 'primary.dark' : 'white',
            bgcolor: scrolled ? 'rgba(21, 101, 192, 0.08)' : 'rgba(255,255,255,0.1)',
          },
          '&.active': {
            bgcolor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.2)',
            color: scrolled ? 'white' : 'white',
            borderColor: scrolled ? 'primary.main' : 'white',
          },
        },
      }}
    >
      <Button
        onClick={() => changeLanguage('tr')}
        className={i18n.language === 'tr' ? 'active' : ''}
      >
        TR
      </Button>
      <Button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </Button>
    </ButtonGroup>
  );
};

export default LanguageToggle;
