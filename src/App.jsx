import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DosiePage from './pages/dosPage/DosiePage';
import MainPage from './pages/mainPage/MainPage';
import SearchPage from './pages/searchPage/SearchPage';
import Navbar from './components/nav-bar/Navbar';
// import TempSearch from './pages/tempSearch/tempSearch';

import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Montserrat',
      fontSize: 14
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            minHeight: 'max-content',
            maxHeight: '34px',
            backgroundColor: '#0D0F11'
          },
          focused: {
            backgroundColor: '#0D0F11'
          },
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #0D0F11 inset'
            
            }
          }
        }
      }
    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar/>

        <Router>
          <Routes>
            <Route path='/main' element={
              <MainPage/>
            }/>
            <Route path='/' element={
              <MainPage/>
            }/>

            <Route path='/profiler' element={
              <SearchPage/>
            }/>

            <Route path='/profiler/person/:iin' element={
              <DosiePage/>
            }/>

            <Route path='/login' element={
              <div>Login route</div>
            }/>


          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
