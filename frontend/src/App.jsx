import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#990000', 
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#ffcccc', 
              fontWeight: 'bold',
            }}
          >
            URL Shortener
          </Typography>
          <Button
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#cc0000',
              },
            }}
            component={Link}
            to="/"
          >
            Shorten
          </Button>
          <Button
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#cc0000',
              },
            }}
            component={Link}
            to="/stats"
          >
            Stats
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Box>
  );
}

export default App;
