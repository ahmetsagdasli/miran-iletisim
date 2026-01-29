import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_u88l85h',
        'template_bxp1ux2',
        {
          title: 'Yeni İletişim Formu',
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          phone: formData.phone,
          message: formData.message,
        },
        'wq2S_SXffu8v2VLrd'
      );

      setStatus({ type: 'success', message: t('contact.form.success') });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.form.error') });
    }

    setLoading(false);
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {status.message && (
          <Alert
            severity={status.type}
            sx={{ mb: 2 }}
            onClose={() => setStatus({ type: '', message: '' })}
          >
            {status.message}
          </Alert>
        )}

        <TextField
          required
          fullWidth
          label={t('contact.form.name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <TextField
          required
          fullWidth
          type="email"
          label={t('contact.form.email')}
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />

        <TextField
          fullWidth
          label={t('contact.form.phone')}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
        />

        <TextField
          required
          fullWidth
          multiline
          rows={4}
          label={t('contact.form.message')}
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          {t('contact.form.submit')}
        </Button>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
