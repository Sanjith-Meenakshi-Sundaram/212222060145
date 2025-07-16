import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function UrlForm({ setShortcode }) {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/shorturls', {
        url,
        shortcode: customCode,
        validity: validity ? parseInt(validity) : 30
      });

      setShortUrl(res.data.shortLink);
      setExpiry(res.data.expiry);
      setShortcode(customCode || res.data.shortLink.split("/").pop());
    } catch (err) {
      alert("Error: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <Box>
      <TextField label="Original URL" fullWidth value={url} onChange={e => setUrl(e.target.value)} sx={{
        mb: 2,
        input: { color: 'white' },
        label: { color: 'white' },
      }} />
      <TextField label="Custom Shortcode (optional)" fullWidth value={customCode} onChange={e => setCustomCode(e.target.value)} sx={{
        mb: 2,
        input: { color: 'white' },
        label: { color: 'white' },
      }} />
      <TextField label="Validity (minutes)" fullWidth value={validity} onChange={e => setValidity(e.target.value)} sx={{
        mb: 2,
        input: { color: 'white' },
        label: { color: 'white' },
      }} />
      <Button variant="contained" fullWidth onClick={handleSubmit} sx={{
        backgroundColor: '#2c2c2c',
        color: '#fff',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#cc0000',
        },
        mb: 2,
      }}>Generate Short URL</Button>

      {shortUrl && (
        <Box mt={4}>
          <Typography>Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a></Typography>
          <Typography>Expires At: {expiry}</Typography>
        </Box>
      )}
    </Box>
  );
}