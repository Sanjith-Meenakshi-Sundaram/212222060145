import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

export default function Analytics({ shortcode }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!shortcode) return;
    axios.get(`http://localhost:5000/shorturls/${shortcode}`)
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, [shortcode]);

  if (!data) return null;

  return (
    <Box mt={4}>
      <Typography>Original URL: {data.originalUrl}</Typography>
      <Typography>Created At: {new Date(data.createdAt).toLocaleString()}</Typography>
      <Typography>Expires At: {new Date(data.expiry).toLocaleString()}</Typography>
      <Typography>Total Clicks: {data.clicks}</Typography>
      {data.clickDetails?.map((click, idx) => (
        <Box key={idx} sx={{ borderTop: '1px solid #ccc', mt: 1, pt: 1 }}>
          <Typography>Click {idx + 1}</Typography>
          <Typography>Time: {new Date(click.timestamp).toLocaleString()}</Typography>
          <Typography>Referrer: {click.referrer}</Typography>
        </Box>
      ))}
    </Box>
  );
}