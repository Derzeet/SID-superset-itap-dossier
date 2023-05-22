import { useState } from 'react'
import React, { lazy, Suspense } from "react";

import {motion} from 'framer-motion';

import CalendarPage from './pages/CalendarPage/CalendarPage';
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DosiePage from './pages/dosPage/DosiePage';
import UlDosiePage from './pages/ulDosPage/UlDosiePage'
import MainPage from './pages/mainPage/MainPage';
import SearchPage from './pages/searchPage/SearchPage';
import Navbar from './components/dossierComponents/nav-bar/Navbar';
import WorkersPage from './pages/WorkersPage/WorkersPage';
// import Navbar from './components/itapComponents/NavBar/Navbar';
import GrayNavbar from './components/gray-navbar/gray-navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import OracleTable from "./pages/OracleTable/OracleTable";
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CreateArticlePage from './pages/CreateArticle/CreateArticlePage';
function App() {
  const userSession = JSON.parse(localStorage.getItem("user"))

  const GraphNet = lazy(() => import('./pages/Graphs/Graphs'));
  const RegistrationPage = lazy(() => import('./pages/Registration/RegistrationPage'));
  const SignInPage = lazy(() => import('./pages/SignIn/SignInPage'));
  const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));
  const TableLog = lazy(() => import('./components/itapComponents/TableLog/TableLog'));
  const UserDetails = lazy(() => import('./pages/userDetails/userDetails'));
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
        <Router>
          <Routes>
            <Route path='/' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                {/* <Navbar /> */}
                <MainPage/>
              </>
            }/>
            <Route path='/workers' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                {/* <Navbar /> */}
                <WorkersPage/>
              </>
            }/>
            <Route path='/article/create' element={
              <>
                <GrayNavbar/>
                <CreateArticlePage/>
              </>
            }/>
            <Route path='/news' element={
              <>
                <GrayNavbar/>
                <NewsPage/>
              </>
            }/> 
            <Route path='/article/:id' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                <ArticlePage/>
              </>
            }/>
            <Route path='/calendar' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                {/* <Navbar /> */}
                <CalendarPage/>
              </>
            }/>
            <Route path='/profiler' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                <SearchPage/>
              </>
            }/>

            <Route path='/profiler/person/:iin' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                <DosiePage/>
              </>
            }/>
            <Route path='/profiler/ul/:bin' element={
              <>
                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                <UlDosiePage/>
              </>
            }/>
            
            <Route path="/itap" element={
              <>
                {/* <div style={{height: "12px"}}></div> */}
                <GrayNavbar/>

                  <Suspense fallback={<span class="loader"></span>}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
                      <GraphNet />

                    </motion.div>
                  </Suspense>
              </>
            } />
            <Route path="/registration" element={
              <>

                <div style={{height: "12px"}}></div>
                <GrayNavbar/>
                  <Suspense fallback={<span class="loader"></span>}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
                      <RegistrationPage/>
                    </motion.div>
                  </Suspense>
              </>
            } />
            
          <Route path="/login" element={
            <>
              <Suspense fallback={<span class="loader"></span>}>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
                  <SignInPage />
                </motion.div>
              </Suspense>
            </>
          } />
          {console.log(userSession)}
          <Route path="/table" element={
            <>
              {/* {!userSession ? navigate('/login', {replace: true}) : ""}  */}
              <div style={{height: "12px"}}></div>
              <GrayNavbar/>
              <Suspense fallback={<span className="loader"></span>}>
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
              <TableLog/>
                  </motion.div>
              </Suspense>
            </>
          } />
          <Route path="/admin" element={
            <>
                  <div style={{height: "12px"}}></div>
                  <GrayNavbar/>
                  <Suspense fallback={<span class="loader"></span>}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
                      <AdminPage/>
                    </motion.div>
                  </Suspense>
                </>
              }/>
          <Route path="/users/:username" element={
            <>
              <div style={{height: "12px"}}></div>
              <GrayNavbar/>
              <Suspense fallback={<span class="loader"></span>}>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.2 }}>
                  <UserDetails/>
                </motion.div>
              </Suspense>
            </>
          }/>

            <Route path='/oracle' element={
              <>
              <div style={{height: "12px"}}></div>
              <GrayNavbar/>
              <OracleTable/>
              </>
            }/>
            </Routes>
        </Router>
        </ThemeProvider>
    </div>
  )
}

export default App
