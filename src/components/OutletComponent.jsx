import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function OutletComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default OutletComponent;
