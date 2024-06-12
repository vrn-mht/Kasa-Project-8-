import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
import Content from "../Content";
import ApartmentPages from "../pages/ApartmentPages";
import About from "../pages/About";
import ErrorPageNotFound from "../pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
    return <>
    <Navbar />
    <Content>
    <Outlet />
    </Content>
    <Footer />
    </>
}

 export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound />,
        children: [
            {
                path: "/",
                element:<HomePage />

            },
            {
              path: "/flat",
              element: <ApartmentPages />
            },
            {
              path: "/about",
              element: <About />
            }
        ]
    },
  ])
