import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DiagramPages from "./Diagrams/DiagramPages";

const Welcome: React.FC = () => {
  return (
    <>
      {/* Page heading outside the box */}
      <Typography variant="h3" component="h1" gutterBottom>
        jForm Welcome Page
      </Typography>
      <Box sx={{ p: 4, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1">This is the jForm welcome page.</Typography>
        <DiagramPages></DiagramPages>
      </Box>
    </>
  );
};

export default Welcome;
