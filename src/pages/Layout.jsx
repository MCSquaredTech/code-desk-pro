import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

import './page.css'

const Layout = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-auto">
                    <LeftSidebar />
                </div>
                <div className="col-md-9">
                    <Header />
                    <div className="row">
                        <div 
                            className="col-md-12">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout;
