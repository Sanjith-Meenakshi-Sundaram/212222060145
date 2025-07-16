import { Paper, Typography, Box, Grid } from '@mui/material';
import UrlForm from '../components/Urlform.jsx';
import { useState } from 'react';

export default function Home() {
  const [shortcode, setShortcode] = useState("");

  return (
    <Box
      sx={{
        // background: 'linear-gradient(to right, #d3cce3, #e9e4f0)',
        backgroundColor: '#2c2c2c',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 4,
          borderRadius: 4,
          backgroundColor: '#990000',
        //   backdropFilter: 'blur(10px)',
        //   backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="#ffffff">
             Shrink Your Links
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#fceeee' }}>
            Create beautiful, trackable short URLs
          </Typography>
        </Box>

        <UrlForm setShortcode={setShortcode} />
      </Paper>
    </Box>
  );
}
