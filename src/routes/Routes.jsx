import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../Errorpage/Errorpage";
import Timeline from "../pages/timeline/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { 
        path: "/timeline", 
        element: <Timeline />
       }
    ],
  },
]);
