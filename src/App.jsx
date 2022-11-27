import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4169e1',
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <HeroSection />
        <Services />
        <Contact />
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}

export default App

