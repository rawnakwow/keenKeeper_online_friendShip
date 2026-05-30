import { Outlet } from "react-router-dom";
import Navber from "../components/shared/navber/Navber";
import Footer from "../components/shared/navber/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
          
            <Navber />
            
            
            <main className="flex-grow">
                <Outlet />
            </main>
            
            
            <Footer />
        </div>
    );
};

export default MainLayout;
