import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./NavBar";


const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline/>
      <NavBar/>
      <main>
        <Container sx={ { py: 8 } } maxWidth="xl">
          { children }
        </Container>
      </main>
    </ThemeProvider>
  );
}
