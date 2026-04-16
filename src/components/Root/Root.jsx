import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import {useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>

             
      {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-base-100/60 z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

            <div className='mx-10'>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;