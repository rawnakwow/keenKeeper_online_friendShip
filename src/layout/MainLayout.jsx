import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navber from "../components/shared/navber/Navber";
import Footer from "../components/shared/navber/Footer"; 

const MainLayout = () => {
    const [timeline, setTimeline] = useState([
        { id: 1, type: "Meetup", icon: "🤝", title: "Meetup with Tom Baker", date: "March 29, 2026" },
        { id: 2, type: "Text", icon: "💬", title: "Text with Sarah Chen", date: "March 28, 2026" },
        { id: 3, type: "Video", icon: "📹", title: "Video with Aisha Patel", date: "March 23, 2026" }
    ]);

    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            <Toaster position="top-right" reverseOrder={false} />
            <Navber />
            <main className="flex-grow">
                <Outlet context={{ timeline, setTimeline }} />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
