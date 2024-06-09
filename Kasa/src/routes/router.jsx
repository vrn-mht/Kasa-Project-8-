import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
import Content from "../Content";
import ApartmentPages from "../pages/ApartmentPages";

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
        errorElement: <h1>404 NOT FOUND</h1>,
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
              element: <h1>A propos</h1>
            }
        ]
    },
  ])
