import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Analytics from '../components/Analytics';

export default function Stats() {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1c1c1c, #2e2e2e)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 4,
          borderRadius: 4,
          backgroundColor: '#990000',
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="white">
            Track Short URL Stats
          </Typography>
          <Typography variant="subtitle2" color="lightgrey">
            View clicks, referrers and more!
          </Typography>
        </Box>

        <TextField
          label="Enter Shortcode"
          fullWidth
          value={code}
          onChange={e => setCode(e.target.value)}
          sx={{
            mb: 2,
            input: { color: 'white' },
            label: { color: 'white' },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={() => setSubmitted(true)}
          sx={{
            backgroundColor: '#2c2c2c',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'red',
            },
            mb: 2,
          }}
        >
          Show Analytics
        </Button>

        {submitted && <Analytics shortcode={code} />}
      </Paper>
    </Box>
  );
}
