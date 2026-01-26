import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/hakkimizda' },
    { label: t('nav.products'), path: '/urunler' },
    { label: t('nav.services'), path: '/hizmetler' },
    { label: t('nav.contact'), path: '/iletisim' },
  ];

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: 'primary.main',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2.5,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          MİRAN
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              px: 3,
              bgcolor: isActive(item.path) ? 'rgba(255,255,255,0.15)' : 'transparent',
              borderLeft: isActive(item.path) ? '4px solid white' : '4px solid transparent',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '1rem',
                fontWeight: isActive(item.path) ? 700 : 500,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <LanguageToggle />
      </Box>
    </Box>
  );

  // Determine header style based on page and scroll
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: isTransparent ? 'transparent' : 'white',
          boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: { xs: 1.5, md: 2 },
              minHeight: { xs: 70, md: 80 },
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: isTransparent ? 'white' : 'primary.main',
                  transition: 'color 0.3s ease',
                  textShadow: isTransparent ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                MİRAN
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  ml: 1,
                  color: isTransparent ? 'rgba(255,255,255,0.9)' : 'text.secondary',
                  display: { xs: 'none', sm: 'block' },
                  transition: 'color 0.3s ease',
                }}
              >
                İletişim Lojistik
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: isTransparent ? 'white' : 'primary.main',
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isTransparent ? 'white' : 'text.primary',
                      fontWeight: isActive(item.path) ? 700 : 500,
                      px: 2,
                      py: 1,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive(item.path) ? '60%' : '0%',
                        height: 3,
                        bgcolor: isTransparent ? 'white' : 'primary.main',
                        borderRadius: 2,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        bgcolor: isTransparent
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(21, 101, 192, 0.08)',
                        '&::after': {
                          width: '60%',
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Box sx={{ ml: 2 }}>
                  <LanguageToggle scrolled={!isTransparent} />
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
