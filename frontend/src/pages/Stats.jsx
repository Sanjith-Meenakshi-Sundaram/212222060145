import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Analytics from '../components/Analytics';

export default function Stats() {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="secondary">
            📊 Track Short URL Stats
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            View clicks, referrers and more!
          </Typography>
        </Box>

        <TextField
          label="Enter Shortcode"
          fullWidth
          value={code}
          onChange={e => setCode(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={() => setSubmitted(true)}
        >
          Show Analytics
        </Button>

        {submitted && <Analytics shortcode={code} />}
      </Paper>
    </Box>
  );
}
