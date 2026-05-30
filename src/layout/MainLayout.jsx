import React from 'react';
import Navber from "../components/shared/navber/Navber";
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const MainLayout = () => {
    return (
        <div>
            



            <Navber/>
            <h2>Main Content</h2>
            <Outlet/>
            <Footer/>









        </div>
    );
};

export default MainLayout;