import React from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Container,
  Typography,
  Box
} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box mt={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            VBP LBO ETA Model
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to the Value Based Pricing LBO ETA Model
          </Typography>
          <Typography variant="body1" paragraph>
            This application helps analyze and model Leveraged Buyout (LBO) scenarios
            for Entrepreneurship Through Acquisition (ETA) using Value Based Pricing principles.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
