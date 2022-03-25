import './App.scss';
import { ThemeProvider } from '@emotion/react';
import { Paper, Container, CssBaseline } from '@mui/material'; 
import { createTheme } from '@mui/material/styles';
import Header from './components/Header/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import MuiTheme from './theme/MuiTheme';

import { SnackbarProvider } from 'notistack';

function App() {
  return ( 
    <BrowserRouter> 
     <SnackbarProvider>  
     <MuiTheme>
      <Paper>
        <CssBaseline />
          <Header />  
          <Container sx={{ py: '2rem' }}>
             <Main /> 
          </Container> 
         <Footer/> 
      </Paper> 
      </MuiTheme>
      </SnackbarProvider> 
  </BrowserRouter>

  );
}

export default App;
