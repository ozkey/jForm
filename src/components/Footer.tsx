import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.100', mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} jForm
      </Typography>
    </Box>
  );
};

export default Footer;

