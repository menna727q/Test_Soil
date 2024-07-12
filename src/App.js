// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MainLayout from './Component/Layout/MainLayout';
import AuthLAyout from './Component/Layout/AuthLAyout';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Identify from './Component/Identify/Identify';
import NotFound from './Component/NotFound/NotFound';
import Getstart from './Component/GetStrat/Getstart';
import History from './Component/History/History';
import UploadContextProvider from './context/UploadContextProvider';

const routes = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/Home', element: <ProtectedRoutes><Home/></ProtectedRoutes> },
      { path: '/About', element: <ProtectedRoutes><About/></ProtectedRoutes> },
      { path: '/Identify', element: <ProtectedRoutes><Identify/></ProtectedRoutes> },
      { path: '/History', element: <ProtectedRoutes><History/></ProtectedRoutes> },
      { path: '*', element: <NotFound/> }
    ],
  },
  {
    path: '/',
    element: <AuthLAyout />,
    children: [
      { index: true, element: <Getstart/> },
      { path: '/Login', element: <Login/> },
      { path: '/SignUp', element: <SignUp/> }
        ],
  }
]);

function App() {
  const [isAuthLayout, setIsAuthLayout] = useState(window.location.pathname.includes('/Login') || window.location.pathname.includes('/SignUp') || window.location.pathname === '/');

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('auth-layout', isAuthLayout);
    body.classList.toggle('main-layout', !isAuthLayout);
  }, [isAuthLayout]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsAuthLayout(window.location.pathname.includes('/Login') ||
       window.location.pathname.includes('/SignUp') || window.location.pathname === '/');
    };

    // Subscribe to the router's location change event
    routes.subscribe(handleRouteChange);

    // Unsubscribe from the router's location change event when component unmounts
    return () => {
      routes.unsubscribe(handleRouteChange);
    };
  }, []);

  return (
  <UploadContextProvider>
    <RouterProvider router={routes}/>
    </UploadContextProvider>
) ;
}

export default App;